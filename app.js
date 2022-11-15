const date = new Date("december 31 2022 23:59:59")

const counter = setInterval(() => {
  // date now
  const dateNow = new Date()
  const diff = Math.floor((date - dateNow) / 1000)
  let d = Math.floor(diff / 60 / 60 / 24)
  let h = Math.floor((diff - d * 60 * 60 * 24) / 60 / 60)
  let m = Math.floor((diff - (d * 60 * 60 * 24 + h * 60 * 60)) / 60)
  let s = Math.floor(diff - (d * 60 * 60 * 24 + h * 60 * 60 + m * 60))

  document.querySelector(".days").innerHTML = 10 > d ? `0${d}` : d
  document.querySelector(".hours").innerHTML = 10 > h ? `0${h}` : h
  document.querySelector(".minutes").innerHTML = 10 > m ? `0${m}` : m
  document.querySelector(".seconds").innerHTML = 10 > s ? `0${s}` : s
}, 1000)
