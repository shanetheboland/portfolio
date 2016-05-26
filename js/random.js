var randomlinks=new Array()

randomlinks[0]="https://www.youtube.com/watch?v=G7RgN9ijwE4"
randomlinks[1]="https://www.youtube.com/watch?v=KxGRhd_iWuE"
randomlinks[2]="http://chillestmonkey.com/"
randomlinks[3]="https://www.youtube.com/watch?v=pxIAATLeZuk"
randomlinks[4]="https://www.youtube.com/watch?v=5fP4emqw7O4"
randomlinks[5]="https://www.instagram.com/p/BB1VQvJDavp/"
randomlinks[6]="https://www.youtube.com/watch?v=gbt61vcAkG0"
randomlinks[7]="http://33.media.tumblr.com/951c3602b40056281a230d3a93393a10/tumblr_inline_nyuwhdNEXO1rusaov_500.gif"

function randomlink(){
    window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}