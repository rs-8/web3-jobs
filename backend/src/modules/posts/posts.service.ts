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

  async findAll(offset?: number, limit?: number) {
    const [data, count] = await this.postsRepository.findAndCount({
      order: {
        id: 'ASC',
      },
      skip: offset,
      take: limit,
    });
    return {
      data,
      count,
    };
  }

  async findOne(id: string | number): Promise<PostEntity> {
    const post = await this.postsRepository.findOne(id);
    if (!post)
      throw new HttpException(
        'Post with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    return post;
  }
}
