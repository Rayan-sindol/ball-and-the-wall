function touching(movingObj,fixedObj){
    if(movingObj.x-fixedObj.x<fixedObj.width/2+movingObj.width/2
      &&fixedObj.x-movingObj.x<fixedObj.width/2+movingObj.width/2
      &&fixedObj.y-movingObj.y<fixedObj.height/2+movingObj.height/2
      &&movingObj.y-fixedObj.y<fixedObj.height/2+movingObj.height/2){
  
      return true;
    }
    else{
      return false;
    }
  }