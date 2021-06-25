package com.example.apedb.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.apedb.model.Posts;

public interface PostsRepository extends CrudRepository<Posts, Long> {

}
