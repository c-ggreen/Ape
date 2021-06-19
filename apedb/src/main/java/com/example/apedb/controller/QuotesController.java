package com.example.apedb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apedb.model.Quotes;
import com.example.apedb.service.QuotesService;

@RestController
@RequestMapping("/quotes")
public class QuotesController {
	@Autowired
	QuotesService quotesservice;
	
	// get all items
	@GetMapping
	public Iterable<Quotes> getItems(){
		return quotesservice.getItems();
	}
	
	// create item
	@PostMapping
	public Quotes createItem(@RequestBody Quotes item) {
		return quotesservice.createItem(item);
	}
	
	// get item by id
	@GetMapping("/{id}")
	public Quotes getItemById(@PathVariable Long id) {
		return quotesservice.getItemByID(id);
	}
	
	// update items
	@PatchMapping
	public Quotes updateItem(@RequestBody Quotes item) {
		return quotesservice.updateItems(item);
	}
	
	// delete items
	@DeleteMapping("/{id}")
	public HttpStatus deleteItem(@PathVariable Long id) {
		return quotesservice.deleteItem(id);
	}
}
