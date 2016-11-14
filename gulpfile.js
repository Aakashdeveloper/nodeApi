var gulp = require('gulp'),
    nodemon= require('gulp-nodemon');
    
gulp.task('default', function(){
	nodemon({
		script: 'apiMeetup.js',
		ext:'js',
		env:{
			PORT:7500
		},
		ignore:['./node_modules/**']
	})
	.on('restart', function(){
		console.log('restarting');
	})
});

