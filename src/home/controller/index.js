'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	async indexAction() {
		//auto render template file index_index.html
		let post = this.post();
		let success = null;
		if(post.username == '' || post.password == '') {
			success = {
				code: 0,
				msg: '请填写信息'
			}
		} else {
			if(!think.isEmpty(post.username)) {
				let findusername = await this.model('user').where({
					username: post.username
				}).find();
				if(think.isEmpty(findusername)) {
					success = {
						code: 0,
						msg: '用户名不存在'
					}
				} else {
					let finduser = await this.model('user').where(post).find()
					if(think.isEmpty(finduser)) {
						success = {
							code: 0,
							msg: '用户名密码不正确'
						}
					} else {
						await this.session('userInfo', {
							id: findusername.id,
							name: findusername.user
						});
						success = {
							code: 1,
							msg: '登录成功'
						}
					}
				}
			} else {
				success = {
					code: 0,
					msg: '用户名不能为空'
				}
			}
		}
		return this.json(success)
	}

	async regAction() {
		let post = this.post();
		let success = null;
		if(post.username == '' || post.password == '') {
			success = {
				code: 0,
				msg: '请填写信息'
			}
		} else {
			if(!think.isEmpty(post.username)) {
				let findusername = await this.model('user').where({
					username: post.username
				}).find()
				if(think.isEmpty(findusername)) {
					await this.model('user').add(post);
					success = {
						code: 1,
						msg: '注册成功'
					}
				} else {
					success = {
						code: 0,
						msg: '用户名已存在，请直接登录'
					}
				}
			} else {
				success = {
					code: 0,
					msg: '用户名不能为空'
				}
			}
		}
		return this.json(success)
	}
	async loginoutAction() {
		await this.session('userInfo', '');
		return this.json({
			code: 1,
			msg: '已退出，请直接登录'
		})
	}
	async articleAction(){
		var list = await this.model('article').select();
		return this.json(list)
	}
	
	async articlelistAction(){
		let get = this.get();
		let success = null;
		if(!think.isEmpty(get)){
			success = await this.model('article').where({id:get.id}).find();
		}
		success.time = think.datetime(success.time, "YYYY-MM-DD");
		return this.json(success)
	}
}