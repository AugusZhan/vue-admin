import { MessageBox, Message } from 'element-ui'

const infoBox = function(message,title){
  return MessageBox.confirm(message,title ? title : "提示",{
    type:'info'
  })
}
const warnBox = function(message,title){
  return MessageBox.confirm(message,title ? title : "提示",{
    type:'warning'
  })
}
const errorBox = function(message,title){
  return MessageBox.confirm(message,title ? title : "提示",{
    type:'error'
  })
}
const successBox = function(message,title){
  return MessageBox.confirm(message,title ? title : "提示",{
    type:'success'
  })
}

export default {
  infoBox,
  warnBox,
  errorBox,
  successBox
}