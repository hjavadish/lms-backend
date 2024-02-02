import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from '../model/user.schema'
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../services/user.service'
import { json } from "stream/consumers";
import { stringify } from "querystring";


@Controller('mentor')
export class UserController {
  constructor(private readonly userService: UserService,
    private jwtService: JwtService
  ) { }

  @Get()
  async List(){
    return this.userService.getAll();
  }
  @Post('/signup')
  async Signup(@Res() response, @Body() user: User) {
    const newUSer = await this.userService.signup(user);
    return response.status(HttpStatus.CREATED).json({
      newUSer
    })
  }

  @Post('/signup')
  async SignupMentor(@Res() response, @Body() user: User) {
    const newUSer = await this.userService.signup(user);
    return response.status(HttpStatus.CREATED).json({
      newUSer
    })
  }
}