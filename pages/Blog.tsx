import React from 'react'
import '../../styles/globals.css'
import {groq} from "next-sanity"
import { previewData } from "next/headers"

import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewBlogList from '../../components/PreviewBlogList'
import BlogList from '../../components/BlogList'


const query = groq`
*[_type=='post']{
  ..., 
  author->,
  categories[]->
}
`



export default function Blog() {

  if (previewData()){
    return( <PreviewSuspense fallback={(
      <div role="status">
        <p className='text-center text-lg animate-pulse text-[#F7ab0a]'>
          Loading Preview Data ...
        </p>

      </div>
    )}>

      <PreviewBlogList query={query} />
    </PreviewSuspense>)
  }
  return(
    <>
    <BlogList posts={[]}  />
      </>
  );


}
  

