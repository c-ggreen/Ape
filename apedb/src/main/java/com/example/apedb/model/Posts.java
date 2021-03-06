package com.example.apedb.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
@Table(name = "Posts")
public class Posts {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	@Column
	private String topic;
	@Column
	private String name;
	@Column
	private String post;
	@Column
	private ArrayList<PostsReply> postsReplies = new ArrayList<>();

	public Posts() {
		
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPost() {
		return post;
	}

	public void setPost(String post) {
		this.post = post;
	}

	public ArrayList<PostsReply> getPostsReplies() {
		return postsReplies;
	}

	public void setPostsReplies(ArrayList<PostsReply> postsReplies) {
		this.postsReplies = postsReplies;
	}
}
