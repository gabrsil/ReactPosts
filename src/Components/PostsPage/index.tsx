import React, {useState} from 'react';

// import { Container } from './styles';
import {Container, Wrapper, Main, PostList, PostItem, LikeIcon, PostEditor, DeleteIcon, CreatePost, PostTop, PostBottom} from './styles'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';





const PostsPage: React.FC = () => {

    const timestamp = Date.now();
  
  const [postList, setPostList] = useState<any>([]);
  const [postTitle, setPostTitle] = useState<string>('');
  const [postCategory, setPostCategory] = useState<string>('');
  const [postContent, setPostContent] = useState<any>(null);

    console.log(postContent);



  return (
  
        <Container>

            <Wrapper>
                <Main>
                    
                    {/* <PostEditor/>*/ }
                    <PostEditor>
                  
                        <CreatePost >
                           
                            <input 
                            placeholder="Titulo" 
                            type="text"
                            value={postTitle}
                            onChange={e => setPostTitle(e.target.value)}
                            />
                            
                            
                            <select name="" id="">
                                <option value="" selected disabled hidden>Educativo</option>
                                <option value="">Humor</option>
                                <option value="" >Informativo</option>
                            </select>
                            
                            <ReactQuill value={postContent} onChange={setPostContent}>
                            <div className="my-editing-area"/>    
                            </ReactQuill>
                            <input type="submit" value="Postar"/>
                        </CreatePost>

                    </PostEditor>
                    <PostList>
                        <PostItem>
                            <PostTop>
                                <strong>{ new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp) }</strong>
                                <DeleteIcon/>
                            </PostTop>
                            
                            <p>Luuuuuuuul</p>
                            <PostBottom>
                                <span>Categoria</span>
                                
                                <LikeIcon/>
                                
                            </PostBottom>
                        </PostItem>
                        <PostItem>
                            <PostTop>
                                <strong>Title </strong>
                                <DeleteIcon/>
                            </PostTop>
                            
                            <p>Luuuuuuuul</p>
                            <PostBottom>
                                <span>Categoria</span>
                                
                                <LikeIcon/>
                                
                            </PostBottom>
                        </PostItem>
                        <PostItem>
                            <PostTop>
                                <strong>Title </strong>
                                <DeleteIcon/>
                            </PostTop>
                            
                            <p>Luuuuuuuul</p>
                            <PostBottom>
                                <span>Categoria</span>
                                
                                <LikeIcon/>
                                
                            </PostBottom>
                        </PostItem>
                        <PostItem>
                            <PostTop>
                                <strong>Title </strong>
                                <DeleteIcon/>
                            </PostTop>
                            
                            <p>Luuuuuuuul</p>
                            <PostBottom>
                                <span>Categoria</span>
                                
                                <LikeIcon/>
                                
                            </PostBottom>
                        </PostItem>

                    </PostList> 
           

                </Main>
                
            </Wrapper>

        </Container>

    );
}

export default PostsPage;