import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Col, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Grid } from '@mui/material';
import { getAllProducts,deleteProduct } from '../../../api/httpsrequests';
import { Link } from 'react-router-dom';
import { useBasketContext } from '../../../context/BasketContext';
import Search from './Search';



export const Cards = () => {
  const {basket,setBasket} = useBasketContext();
  let obj = useBasketContext()
  console.log(obj)
  const [posts,setPosts] = useState([]);
  const storage = useRef([]);
  useEffect(()=>{
   getAllProducts().then(data=>{
    console.log(data)
    setPosts(data)
    storage.current = data
   })
  },[])

  return (
    <>
   <Search storage={storage} setPosts={setPosts}/>
   {/* <Sort storage={storage} setPosts={setPosts}/> */}
    <Grid container justifyContent="center" mt='100px'>  

    <Row  style={{width:'80%'}} gutter={[20, 30]}>
      {posts.map((post)=>(

     <Col  key={post.id} className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
     {/* <div>{post.id}</div> */}
     <Card style={{height:'500px'}} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.name}
        subheader={post.id}
      />
      <CardMedia
        component="img" 
        height="194"
        image={post.imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {post.discountPercentage}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={()=>{setBasket([...basket,post])}} aria-label="add to favorites"
        >
        {/* <Button onClick={()=>console.log('salam')} aria-label="add to favorites"
        > */}
          <FavoriteIcon />
        </Button>
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        {/* <Button onClick={handleClick}>Delete</Button> */}
      </CardActions>
      <Button variant='contained' color='success' 
        onClick={()=>deleteProduct(post.id)
        }
        
        >Delete</Button>
        <Button variant='contained' color='error'><Link to={`/products/edit/${post.id}`}>Edit</Link></Button>
    </Card>
     </Col>

      ))}

    </Row>
    </Grid>
    </>
  )
}
