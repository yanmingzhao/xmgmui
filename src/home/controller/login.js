'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */  
  async indexAction(){
  	let resault =  await this.session('userInfo');
  	if(think.isEmpty(resault)){
	    return this.display();
  	}else{
  		if(resault.type==2){
				return this.redirect('/admin');
  		}else	{
				return this.redirect('/index');
  		}
  	}
  }
  async signAction(){
  	let data = this.post();	
  	let success = null;
  	let resault = await this.model('username').where({user:data.user,password:data.password}).find()
  	if(!think.isEmpty(resault)){
  		if(resault.type==2){
				success = {code:1,'success':'登录成功','msg':'恭喜您登录成功','type':resault.type}
  		}else{
  			success = {code:2,'error':'用户名权限不够','msg':'对不起您的帐号不是管理员身份，请核对后再次登录','type':resault.type};
  		}
			await this.session('userInfo',{id:resault.id,name:resault.user,type:resault.type});
  	}else{
  		success = {code:0,'error':'用户名或密码不对','msg':'对不起您的用户名或密码不正确请重新输入','type':resault.type};
  	}
		return this.json(success)
  }
  async loginoutAction(){
  	await this.session('userInfo', '');
    return;
  }
}