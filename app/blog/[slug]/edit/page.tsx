"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import QuillEditor from '@/components/QuillEditor'

export default function EditPostPage() {
  const params = useParams() as { slug: string }
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [id, setId] = useState<number | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)
  // guarded by cookie via middleware
  const [imageUrl, setImageUrl] = useState('')
  const [deleting, setDeleting] = useState(false)

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link'],
        ['clean'],
      ],
    },
  }), [])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`/api/posts?slug=${encodeURIComponent(params.slug)}`)
        if (!res.ok) throw new Error('not found')
        const data = await res.json()
        setId(data.id)
        setTitle(data.title)
        setContent(data.content)
        setPublished(data.published)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [params.slug])

  const onSave = async () => {
    if (!id) return
    const res = await fetch('/api/posts', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title, content, published }),
    })
    if (!res.ok) {
      alert('Saving failed')
      return
    }
    const updated = await res.json()
    router.push(`/blog/${updated.slug}`)
  }

  const onDelete = async () => {
    if (!id) return
    if (!confirm('Weet je zeker dat je deze post wilt verwijderen? Dit kan niet ongedaan worden gemaakt.')) return
    setDeleting(true)
    try {
      const res = await fetch('/api/posts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      if (!res.ok) throw new Error('Delete failed')
      router.push('/blog')
    } catch (e) {
      alert('Verwijderen mislukt')
    } finally {
      setDeleting(false)
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Edit Post</h1>
      </div>
      {loading ? (
        <div className="text-gray-400">Loading…</div>
      ) : (
        <div className="space-y-4">
          
          <div>
            <label className="mb-1 block text-sm text-gray-300">Title</label>
            <input className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-300">Content</label>
            <div className="rounded-md border border-gray-800 bg-gray-900">
              <QuillEditor theme="snow" value={content} onChange={setContent} modules={quillModules} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-300">Image URL (extern)</label>
            <div className="flex gap-2">
              <input className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 outline-none" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
              <button type="button" onClick={() => setContent((c) => `${c}\n<img src=\"${imageUrl}\" alt=\"\" />`)} className="rounded-md border border-gray-800 px-3 py-2 text-sm hover:bg-gray-900">Insert</button>
            </div>
            {imageUrl && (
              <div className="mt-2">
                <img src={imageUrl} alt="preview" className="max-h-40 rounded-md border border-gray-800" />
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <button onClick={onSave} className="rounded-full bg-gray-900 px-4 py-2 text-sm hover:bg-gray-950">Save</button>
            <button onClick={() => router.back()} className="rounded-full border border-gray-800 px-4 py-2 text-sm hover:bg-gray-900">Cancel</button>
            <button onClick={onDelete} disabled={deleting} className="ml-auto rounded-full border border-red-900/60 bg-red-900/10 px-4 py-2 text-sm text-red-300 hover:bg-red-900/20 disabled:opacity-60">{deleting ? 'Deleting…' : 'Delete'}</button>
          </div>
        </div>
      )}
    </main>
  )
}


