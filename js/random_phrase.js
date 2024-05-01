function replaceRandomPhrase() {
    const phrases = [
      'when all the world’s asleep, the questions run too deep',
      'eternity is a concept even i can’t wrap my mind around',
      '"meow" ~ my cat',
      'compiling, computing, configuring all of these strings',
      'let’s all love lain!',
      'ermm... what da tuna?',
      'awooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
      'up, down, undulating, the f0 continuously, catathesis i seek',
      'fall in love today',
      'i’ve traveled far and wide, visited places, and followed signs\nwalking and searching, i have managed to climb this high',
      'no matter where you go, everyone’s always connected',
      'the body, physical motion, the activity of the human brain is\n merely a physical phenomenon, simply caused by\n synapses delivering electrical impulses',
      'i keep all my dreams under a lock and key\ni’m so afraid that they will fly, away from me',
      'you are the key that opens me totally,\nmy heart is yours to explore',
      'my heart it beats-a-1, 2\nbrand new, cuz it’s never happened!',
      'look in my eyes and see that’s the ̶̨̧͇͔̩̫̼̮͚̫̘̮̎̏̒̀̄͌͋́̔̋͑́̉̕͠ ̵̹͈̋̏́̔̏̾̀͗s̵̡̗̮̣̻̓̇͆̈́̓͌̏̂̚i̶̛̮̯̝͉̬̪̫̜̅͌̀̑̐̊͐g̷̡͎͈̏ ̷̢̛̫̫̺̼̖̹̮͓̝͖͆̃̾͐̏̋̅̈́̊͜͜͝nal of my lov̷̢̞͙̤̮͙́̂͌͛̔̃͜ę̷̡̢̭̻͖͕͚̤̰̰̬̼͒͐̓͆̒̑͋͆̔̔̉͜͜',
      'so sweet, the secret i hold and i’ll never tell!',
    ];

    const targetElement = document.getElementById('random_phrase');
    if (targetElement) targetElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}

replaceRandomPhrase();
