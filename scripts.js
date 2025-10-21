
document.addEventListener('DOMContentLoaded', function(){
  // Fill year
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.innerText = y;

  // Responsive nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if(toggle){
    toggle.addEventListener('click', function(){
      if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '8px';
    });
  }

  // contact form -> WhatsApp
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = contactForm.name.value || 'Cliente';
      var phone = contactForm.phone.value || '';
      var msg = encodeURIComponent('Olá, sou ' + name + '. ' + (contactForm.message.value || ''));
      window.open('https://wa.me/5582987278815?text=' + msg, '_blank');
    });
  }

  // Segunda via simulation
  var segunda = document.getElementById('segundaViaForm');
  if(segunda){
    segunda.addEventListener('submit', function(e){
      e.preventDefault();
      var cpf = document.getElementById('cliente').value || '';
      alert('Segunda via gerada (simulada) para: ' + cpf + '\nVocê receberá instruções por WhatsApp.');
      window.open('https://wa.me/5582987278815?text=' + encodeURIComponent('Olá, preciso da segunda via para: ' + cpf), '_blank');
    });
  }

  // Mascot pulses on the fiber svg - create animated circles
  try {
    var svg = document.querySelector('.fibers');
    var pulses = svg.querySelector('.pulses');
    var colors = ['#ff6a00','#0b5bff','#25D366'];
    for(var i=0;i<6;i++){
      var c = document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx', 200 + i*160);
      c.setAttribute('cy', 200 - (i%2)*40);
      c.setAttribute('r', 4);
      c.setAttribute('class','pulse');
      c.setAttribute('stroke', colors[i%colors.length]);
      pulses.appendChild(c);
      animatePulse(c, i*700);
    }
    function animatePulse(node, delay){
      var dur = 2400;
      setTimeout(function pulseLoop(){
        node.animate([
          { r:4, opacity:0.95 },
          { r:18, opacity:0.06 }
        ], { duration: dur, easing:'ease-out' });
        setTimeout(pulseLoop, dur + delay);
      }, delay);
    }
  } catch(e){ console.log('pulse failed', e) }

});
