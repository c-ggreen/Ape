package com.example.apedb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apedb.model.PostsReply;
import com.example.apedb.service.PostsReplyService;

@CrossOrigin
@RestController
@RequestMapping("/postsreply")
public class PostsReplyController {
	@Autowired
	PostsReplyService postsreplyservice;
	
	@GetMapping
	public Iterable<PostsReply> getItems(){
		return postsreplyservice.getItems();
	}
	
	@PostMapping
	public PostsReply createItem(@RequestBody PostsReply item) {
		return postsreplyservice.createItem(item);
	}
	
	@GetMapping("/{id}")
	public PostsReply getItemById(@PathVariable Long id) {
		return postsreplyservice.getItemById(id);
	}
	
	@PatchMapping
	public PostsReply updateItem(@RequestBody PostsReply item) {
		return postsreplyservice.updateItems(item);
	}
	
	@DeleteMapping("/{id}")
	public HttpStatus deleteItem(@PathVariable Long id) {
		return postsreplyservice.deleteItem(id);
	}
}
