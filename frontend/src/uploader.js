import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export function Uploader({getBytesCallback}) {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        getBytesCallback(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop: onDrop, accept: "image/*"})

  const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

  return (
    <div {...getRootProps()} className={`dropzone ${additionalClass}`}>
      <input {...getInputProps()} />
      <span>{isDragActive ? "📂" : "📁"}</span>
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}
