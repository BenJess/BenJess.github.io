(function($){
	$.fn.percentPie = function(options){

		var settings = $.extend({
			width: 100,
			trackColor: 'f5f5f5',
			barColor: 'aaa',
			barWeight: 30,
			startPercent: 0,
			endPercent: 1,
			fps: 60
		}, options);

		this.css({
			width: settings.width,
			height: settings.width
		});

		var that = this,
			hoverPolice = false,
			canvasWidth = settings.width,
			canvasHeight = canvasWidth,
			id = $('canvas').length,
			canvasElement = $('<canvas id="'+ id +'" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>'),
			canvas = canvasElement.get(0).getContext('2d'),
			centerX = canvasWidth/2,
			centerY = canvasHeight/2,
			radius = settings.width/2 - settings.barWeight/2;
			counterClockwise = false,
			fps = 1000 / settings.fps,
			update = .01;
			this.angle = settings.startPercent;

		this.drawArc = function(startAngle, percentFilled, color){
			var drawingArc = true;
			canvas.beginPath();
			canvas.arc(centerX, centerY, radius, (Math.PI/180)*(startAngle * 360 - 90), (Math.PI/180)*(percentFilled * 360 - 90), counterClockwise);
			canvas.strokeStyle = color;
			canvas.lineWidth = settings.barWeight;
			canvas.stroke();
			drawingArc = false;
		}

		this.fillChart = function(stop){
			var loop = setInterval(function(){
				hoverPolice = true;
				canvas.clearRect(0, 0, canvasWidth, canvasHeight);

				that.drawArc(0, 360, settings.trackColor);
				that.angle += update;
				that.drawArc(settings.startPercent, that.angle, settings.barColor);

				if(that.angle > stop){
					clearInterval(loop);
					hoverPolice = false;
				}
			}, fps);
		}

		this.mouseover(function(){
			if(hoverPolice == false){
				that.angle = settings.startPercent;
				that.fillChart(settings.endPercent);
			}
		});

		this.fillChart(settings.endPercent);
		this.append(canvasElement);
		return this;
	}
}(jQuery));

$(document).ready(function() {
  
	$('.delivered').percentPie({
		width: 100,
		trackColor: '#f5f5f5',
		barColor: '#b9d926',
		barWeight: 20,
		endPercent: .43,
		fps: 60
	});
  
  $('.unique_opens').percentPie({
		width: 100,
		trackColor: '#f5f5f5',
		barColor: '#1a8b84',
		barWeight: 20,
		endPercent: .21,
		fps: 60
	});
  
  $('.clicks').percentPie({
		width: 100,
		trackColor: '#f5f5f5',
		barColor: '#c3d1d4',
		barWeight: 20,
		endPercent: .19,
		fps: 60
	});
   $('.unique_clicks').percentPie({
		width: 100,
		trackColor: '#f5f5f5',
		barColor: '#d8a690',
		barWeight: 20,
		endPercent: .11,
		fps: 60
	});
  
  $('.conversions').percentPie({
		width: 100,
		trackColor: '#f5f5f5',
		barColor: '#eee32a',
		barWeight: 20,
		endPercent: .03,
		fps: 60
	});
    
});