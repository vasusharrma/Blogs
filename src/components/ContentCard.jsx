import React from 'react'

const ContentCard = ({dataB}) => {
  return (
          <div className="py-5  ">
            <p className="text-xl font-extrabold mb-1">{dataB.title}</p>
            <p className="text-gray-600 font-medium text-md">
              By <span className="italic">{dataB.author}</span> on <span className='font-black underline' >{dataB.category}</span>
            </p>
            <p className="mb-2 text-gray-600 font-medium text-md">Posted On {dataB.date}</p>
            <p className="mb-1">{dataB.content}</p>
            <p className="text-blue-700 underline cursor-pointer font-extrabold text-sm" >{dataB.tags.join(",  #")}</p>
          </div>
  )
}

export default ContentCard