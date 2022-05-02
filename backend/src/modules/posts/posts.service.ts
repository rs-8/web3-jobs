import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
  ) {}

  async create(input: CreatePostInput): Promise<PostEntity> {
    const post = await this.postsRepository.create(input);
    await this.postsRepository.save(post);
    return post;
  }

  findAll(): Promise<PostEntity[]> {
    return this.postsRepository.find();
  }

  async findOne(id: string | number): Promise<PostEntity> {
    const user = await this.postsRepository.findOne(id);
    if (!user)
      throw new HttpException(
        'Post with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    return user;
  }
}
