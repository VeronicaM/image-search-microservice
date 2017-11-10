# Image Search Microservice 

- Hit this endpoint api/imagesearch/your search term to get a list of images in the following format :
```json
[
  {
  "url": "https://i.ytimg.com/vi/dWpGC6Fg0io/hqdefault.jpg",
  "snippet": "Jas Patrick sings Snow Day starring LOLCats Funny Cats - YouTube",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMCLSl2dHm87xTU6uMFZD0Jym2E-4lAaSdJzfc_6OkeB_CdF1vjgZZsR2",
  "context": "https://www.youtube.com/watch?v=dWpGC6Fg0io"
  },
  {
  "url": "http://i0.kym-cdn.com/photos/images/original/000/010/014/lolcats-funny-pictures-leroy-jenkins.jpg",
  "snippet": "Image - 10014] | LOLcats | Know Your Meme",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_pDSRjgo3sEUaNo0xOOjh_frpTjCy1VyoPG-hh0aK7aRvfTDlXPnx-Q",
  "context": "http://knowyourmeme.com/photos/10014-lolcats"
  }
]
```

- Add the offset parameter to paginate the result. Usage example : api/imagesearch/your search term ?offset=2  

- Hit this endpoint to see a list of most recently submited searches 
api/latest/imagesearch 

#Created with
- Express
- Mongoose
- MLab
- Dotenv
- Google Search API 
