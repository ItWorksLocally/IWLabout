define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/templates/about.me.jst'
], function ($, _, Backbone, AboutMeTemplate) {
  'use strict';

  var aboutMeView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    render: function () {
      var data;
      switch(Backbone.history.getFragment()) {
        case 'alen':
        data = {
          name: 'Alen',
          surname: 'Huskanović',
          hometown: 'Dugo Selo',
          company: 'Repsly',
          role: 'Mobile dev',
          image: '/assets/img/alen.jpg',
          quote: 'you only have one life, so make it extraordinary',
          description: 'IT enthusiast and experienced Android developer with big ambitions.',
          github: 'https://github.com/ahuskano',
          twitter: 'https://twitter.com/ahuskano',
          linkedin: 'https://www.linkedin.com/in/huskanovicalen',
          education: [{name:'OS Dugo Selo',years:'1999-2007'},{name:'High School Dugo Selo/Computer Technician',years:'2007-2011'},{name:'Faculty of organization and informatics Varazdin',years:'2011-2016'}],
          skills:[{name:'Android',level:'8'},{name:'Java',level:'6'},{name:'SQL',level:'7'},{name:'Python',level:'4'}],
        };
        break;
        case 'igor':
        data = {
          name: "Igor",
          surname: "Rinkovec",
          hometown: "Varaždin",
          company: "Trikoder",
          role: "Backend Developer",
          image: "/assets/img/igor.JPG",
          quote: "Lovro, popravi ovo.",
          description: "Loves breaking things in the weirdest ways possible and making computers learn things.",
          github: "https://github.com/TheWildHorse",
          twitter: "https://twitter.com/LordShigi",
          linkedin: "https://hr.linkedin.com/in/igorrinkovec",
          education: [{name:"Faculty Of Organization And Informatics",years:"2014-2019(expected)"}],
          skills:[{name:"PHP",level:"8.9999999"},{name:"Javascript",level:"7"},{name:"SQL",level:"8"},{name:"Python",level:"6"},{name:"CSS",level:"7.5"},{name:"BrainF*ck",level:"++++++++++"}],
        };
        break;
        case 'lovro':
        data = {
          name: 'Lovro',
          surname: 'Predovan',
          hometown: 'Zadar',
          company: 'Rentlio',
          role: 'Backend/Frontend dev',
          image: 'https://pbs.twimg.com/profile_images/716370302930968578/liP19joH.jpg',
          quote: 'Nema labavo.',
          description: 'All around guy, into web dev, having fun and enjoying low iq music.',
          github: 'https://github.com/lpredova',
          twitter: 'https://twitter.com/lovro_p',
          linkedin: 'https://hr.linkedin.com/in/lovropredovan',
          education: [{name:'OS Bartula Kasica Zadar',years:'1999-2007'},{name:'Gymnasium of Franjo Petric Zadar',years:'2007-2011'},{name:'Faculty of organization and informatics Varazdin',years:'2011-2016'}],
          skills:[{name:'PHP',level:'7.5'},{name:'Javascript',level:'5'},{name:'SQL',level:'8'},{name:'Python',level:'6'},{name:'CSS',level:'7.5'},{name:'Java',level:'-9000'}],
        };
        break;
        case 'zoran':
        data = {
          name: 'Zoran',
          surname: 'Antolović',
          hometown: 'Osijek',
          company: 'Trikoder / MyBeeLine',
          role: 'Backend Dev / Ops',
          image: '/assets/img/zoran.jpg',
          quote: 'To nikad nije ni radilo.',
          description: 'Experienced developer, public speaker and semi-entepreneur, in love with technology and turbo folk',
          github: 'https://github.com/zoka123',
          twitter: 'https://twitter.com/zoran_antolovic',
          linkedin: 'https://hr.linkedin.com/in/antoloviczoran',
          education: [{name:'OS Jagode Truhelke Osijek',years:'1999-2007'},{name:'Klasična gimnazija u Osijeku',years:'2007-2011'},{name:'Faculty of Organization and Informatics Varaždin',years:'2011-2017'}],
          skills:[{name:'PHP',level:'8.5'},{name:'Javascript',level:'5'},{name:'SQL',level:'8'},{name:'Bash',level:'6'},{name:'CSS',level:'9'},{name:'Java',level:'4'}],
        };
        break;
        default:
        console.log(":)");
      }

      var compiledTemplate = _.template(AboutMeTemplate)(data);
      this.$el.html(compiledTemplate);
      return this;
    },

    close     : function () {
      _.each(this.childViews, function (view) {
        view.close();
      });
    }
  });

  return aboutMeView;
});
