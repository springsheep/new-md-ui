/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-25 13:47:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-24 13:33:39
 */

import audio_pic from './files/audio.png'
import video_pic from './files/video.png'
import word_pic from './files/word-150.png'
import excel_pic from './files/excel-150.png'
import ppt_pic from './files/ppt-150.png'
import txt_pic from './files/text-150.png'
import pdf_pic from './files/pdf-150.png'
import img_pic from './files/image.png'
function hasStr(origin, str) {
  return !!~origin.indexOf(str)
}
function hasStrOnce(origin, strs) {
  strs = strs.filter(str => {
    return hasStr(origin, str)
  })
  return !!strs.length
}

export function getFilePic(info) {
  console.log(info)
  let url = ''
  const data = [
    { url: video_pic, types: ['video'] },
    { url: audio_pic, types: ['audio'] },
    { url: img_pic, types: ['image'] },
    {
      url: word_pic,
      types: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    },
    {
      url: excel_pic,
      types: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    },
    {
      url: ppt_pic,
      types: [
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      ],
    },
    { url: pdf_pic, types: ['application/pdf'] },
    { url: txt_pic, types: ['text/plain'] },
  ]

  data.forEach(typeInfo => {
    if (hasStrOnce(info, typeInfo.types)) {
      url = typeInfo.url
    }
  })
  return url
}
