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

import com.example.apedb.model.Posts;
import com.example.apedb.service.PostsService;

@CrossOrigin
@RestController
@RequestMapping("/posts")
public class PostsController {
	@Autowired
	PostsService postsservice;
	
	@GetMapping
	public Iterable<Posts> getItems(){
		return postsservice.getItems();
	}
	
	@PostMapping
	public Posts createItem(@RequestBody Posts item) {
		return postsservice.createItem(item);
	}
	
	@GetMapping("/{id}")
	public Posts getItemById(@PathVariable Long id) {
		return postsservice.getItemById(id);
	}
	
	@PatchMapping
	public Posts updateItem(@RequestBody Posts item) {
		return postsservice.updateItems(item);
	}
	
	@DeleteMapping("/{id}")
	public HttpStatus deleteItem(@PathVariable Long id) {
		return postsservice.deleteItem(id);
	}
}
