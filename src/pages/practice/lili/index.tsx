import { Button } from 'antd'
import React from "react"

// 手动封装一个节流函数
// const throttle = (fn, wait = 50) => {
//   // 上一次执行 fn 的时间
//   let previous = 0
//   // 将 throttle 处理结果当作函数返回
//   return function(...args) {
//     // 获取当前时间，转换成时间戳，单位毫秒
//     const now = +new Date()
//     // 将当前时间和上一次执行函数的时间进行对比
//     // 大于等待时间就把 previous 设置为当前时间并执行函数 fn
//     if (now - previous > wait) {
//       previous = now
//       fn.apply(this, args)
//     }
//   }
// }
/**
 * 只在第一次点击有效，在wait时间段内，再次去点击都是无效的
 * */
function throttle(fn: Function, wait: number = 50) {
  let previous: number = 0
  return function (...args) {
    const now = +new Date()
    // 当前时间减去上一次存储的时间戳变量，小于或等于wait设定的，就不执行函数
    if(now - previous > wait) {
      previous = now
      fn.apply(this, args)
      console.log('执行了')
    }
  }
}
export default function Lili() {
  const handleClick = throttle(() => {
    console.log(222)
  }, 1000)
  return (
    <Button onClick={handleClick}>点击</Button>
  )
}
