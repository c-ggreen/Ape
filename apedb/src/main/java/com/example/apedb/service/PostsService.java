package com.example.apedb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.apedb.model.Posts;
import com.example.apedb.repository.PostsRepository;

@Service
public class PostsService {
	@Autowired
	PostsRepository postsrepository;
	
	public Iterable<Posts> getItems(){
		return postsrepository.findAll();
	}
	
	public Posts getItemById(Long id) {
		return postsrepository.findById(id).get();
	}
	
	public Posts createItem(Posts item) {
		return postsrepository.save(item);
	}
	
	public Posts updateItems(Posts item) {
		return postsrepository.save(item);
	}
	
	public HttpStatus deleteItem(Long id) {
		postsrepository.deleteById(id);
		return HttpStatus.OK;
	}
}
