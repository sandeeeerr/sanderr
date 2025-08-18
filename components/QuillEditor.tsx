"use client"

import React, { forwardRef } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuillNoSSR = dynamic(() => import('react-quill'), { ssr: false }) as any

const QuillEditor = forwardRef<any, any>((props, ref) => {
  return <ReactQuillNoSSR ref={ref} {...props} />
})

QuillEditor.displayName = 'QuillEditor'

export default QuillEditor


