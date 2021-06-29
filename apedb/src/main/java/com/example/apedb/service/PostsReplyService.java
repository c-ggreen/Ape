package com.example.apedb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.apedb.model.PostsReply;
import com.example.apedb.repository.PostsReplyRepository;

@Service
public class PostsReplyService {
	@Autowired
	PostsReplyRepository postsreplyrepository;
	public Iterable<PostsReply> getItems(){
		return postsreplyrepository.findAll();
	}
	
	public PostsReply getItemById(Long id) {
		return postsreplyrepository.findById(id).get();
	}
	
	public PostsReply createItem(PostsReply item) {
		return postsreplyrepository.save(item);
	}
	
	public PostsReply updateItems(PostsReply item) {
		return postsreplyrepository.save(item);
	}
	
	public HttpStatus deleteItem(Long id) {
		postsreplyrepository.deleteById(id);
		return HttpStatus.OK;
	}
}
