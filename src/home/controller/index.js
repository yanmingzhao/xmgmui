'use strict';

import Base from './base.js';

export default class extends Base {	
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let post = this.post();
  	let success = null;
  	if(post.username==''||post.password==''){
  		success = {
    		code:0,
    		msg:'请填写信息'
    	}
  	}else{
	  	let findusername = await this.model('user').where({username:post.username}).find()
	  	if(think.isEmpty(findusername)){
	  		success = {
	    		code:0,
	    		msg:'用户名不存在'
	    	}
	  	}else{
	  		let finduser = await this.model('user').where(post).find()
		    if(think.isEmpty(finduser)){
		    	success = {
		    		code:0,
		    		msg:'用户名密码不正确'
		    	}
		    }else{
		    	success = {
		    		code:1,
		    		msg:'登录成功'
		    	}
		    }
	  	}
  	}
    return this.json(success)
  }
  
  async regAction(){
    let post = this.post();
  	let success = null;
  	if(post.username==''||post.password==''){
  		success = {
    		code:0,
    		msg:'请填写信息'
    	}
  	}else{
	  	let findusername = await this.model('user').where({username:post.username}).find()
	  	if(think.isEmpty(findusername)){
	  		await this.model('user').add(post);
	  		success = {
	  			code:1,
	  			msg:'注册成功'
	  		}
	  	}else{
	  		success = {
	  			code:0,
	  			msg:'用户名已存在，请直接登录'
	  		}
	  	}
  	}
    return this.json(success)
  }

}