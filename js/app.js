function showAnimal(e) {
        const picture = document.querySelector(`img[data-key="${e.keyCode}"]`);
        if(!picture) return;
        document.querySelector("#pic").style = ('display: flex; flex-direction: column');
        console.log(picture);
      }

      window.addEventListener('keydown', showAnimal);