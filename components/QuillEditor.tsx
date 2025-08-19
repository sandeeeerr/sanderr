"use client"

import React, { forwardRef } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

// Use dynamic loader that returns a ref-forwarding component to avoid the
// "Function components cannot be given refs" warning with Next dynamic.
const QuillWithRef = dynamic({
  ssr: false,
  loading: () => (
    <div className="rounded-md border border-gray-800 bg-gray-900 p-3 text-sm text-gray-400">
      Loading editor…
    </div>
  ),
  loader: async () => {
    const { default: ReactQuill } = await import('react-quill')
    return forwardRef<any, any>((props, ref) => <ReactQuill ref={ref} {...props} />)
  },
}) as any

export default QuillWithRef


