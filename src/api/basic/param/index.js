import service from '@/utils/request.js';

export function operateBasParam(request){
  return service({
    url:'/basParam/operateBasParam',
    method:'post',
    data:{
      body:request
    }
  })
}

export function getBasParamByPage(request){
  return service({
    url:'/basParam/getBasParamByPage',
    method:'post',
    data:{
      body:request
    }
  })
}