//1.create a var to require express
const express = require('express')
//2.instead of typing express, put it in a var called app
const app = express()
//6.create var to hold port
const PORT = 3000

let episodeInfo = {
        'episode 1' : {
            'film':'Invaders from the Deep',
            'cast':'Joel Hodgson, Josh Weinstien',
            'date' : 'November 24, 1988',
            'description': 'The crew of the submarine Stingray must do battle against the evil Aquaphibian race.'
        },
        'episode 2': {
            'film':'revenge of the Mysterons from Mars',
            'cast':'Joel Hodgson, Josh Weinstien, Trace Beaulieu',
            'date': 'November 24, 1988',
            'description': 'In 2068, Captain Scarlet leads the battle against a race of Martians who have the power to control matter.'

        },
        'episode 3': {
            'film':'Star force: Fugitive Alien 2',
            'cast':'Joel Hodgson, Josh Weinstien, Trace Beaulieu',
            'date': 'November 27, 1988',
            'description': "In the continuation to Fugitive Alien, Ken and the Bacchus 3 crew are ordered to destroy an alien super-weapon, then move on to attack Valnar's Star itself."   
        },
        'episode 4' : {
            'film':'Gamera vs. Barugon',
            'cast':'Joel Hodgson, Josh Weinstien, Trace Beaulieu',
            'date':'December 4, 1988',
            'description':'A group of men collude to steal a giant jewel from an Asian jungle. The jewel is actually an egg, which hatches into mutant lizard Barugon, who battles Gamera.'     
        },
        'unknown' : {
            'title':'unknown',
            'movie':'unknown',
            'length':'unknown',
            'characters':'unknown'
        }
    }
    
//3.serve up a html file/ main route
app.get('/', (request,response) => {
    //dirname means directory name, server wont know where to look
    response.sendFile(__dirname + '/index.html')
})

//4.make html file

//7. serve up an api request /dont need to serve up client side js for your api (for now)
app.get('/api/:name', (request,response) => {
    const episodeName = request.params.name.toLowerCase()
    //if(episodeInfo[episodeName]){
    //    response.json(episodeInfo[episodeName])
    //}else{
       response.json(episodeInfo)
    //}
})


//5.set up server to listen
app.listen(process.env.PORT || PORT, () => {
    console.log(`Signal running on Port ${PORT}`)
})
