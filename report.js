(function($){
	newline = function(l,space){
		return l+space;
	}	
	demoFromHTML2 = function(options){
		var settings = $.extend({
			source:"x",
			filename:"padiNET2"
		},options),x=80,xvaluepos = 170;
		console.log("demo 2x");
		var doc = new jsPDF('p', 'pt', 'letter');
		doc.setPage();
		doc.text(40,40,"Survey Report");
		doc.setFontSize(11);
		doc.setFontType("bold");
		doc.text(40,x,"Laporan Hasil Survey Database Teknis");
		x = newline(x,15);
		doc.setFontType("normal");
		doc.text(40,x,"Lokasi");
		x = newline(x,15);
		doc.text(40,x,"Jenis Survey");
		x = newline(x,15);
		doc.text(40,x,"Kebutuhan");
		x = newline(x,15);
		doc.line(20, x, 600, x);
		x = newline(x,15);

		//doc.setFont("Courier");
		doc.setFontSize(13);
		doc.text(20, x, "1. Data Calon Pelanggan");
		x = newline(x,15);
		//doc.setFont("Courier");
		doc.setFontSize(11);
	
		doc.text(20, x, "Nama Calon Customer");
		doc.text(xvaluepos, x, ": Tukul Jaya");
		x = newline(x,15);
		doc.text(20, x, "Tipe Bisnis");
		doc.text(xvaluepos, x, ": perorangan");
		x = newline(x,15);
		doc.text(20, x, "Kontak Teknis");
		doc.text(xvaluepos, x, ": Sumanto");
		x = newline(x,15);
		doc.text(20, x, "Alamat");
		doc.text(xvaluepos,x,": Karangn Menjangan");
		x = newline(x,15);
		doc.text(20, x, "Tanggal Pelaksanaan");
		doc.text(xvaluepos, x, ": 2 Feb 2017");
		x = newline(x,15);
		doc.text(20, x, "Pelaksana");
		doc.text(xvaluepos, x, ": Tukul Arwaney");
		x = newline(x,15);

		doc.setFontSize(13);
		doc.text(20, x, "2. Data Teknis");
		x = newline(x,15);
		doc.setFontSize(11);
		doc.text(20, x, "Location");
		doc.text(xvaluepos, x, ": Tukul Jaya");
		x = newline(x,15);
		doc.text(20, x, "Elevation");
		doc.text(xvaluepos, x, ": perorangan");
		x = newline(x,15);
		
		
		doc.setFontSize(13);
		doc.text(20, x, "3. Data Jarak");
		x = newline(x,15);
		doc.setFontSize(11);
		doc.text(20, x, "Location");
		doc.text(xvaluepos, x, ": Tukul Jaya");
		x = newline(x,15);
		doc.text(20, x, "Elevation");
		doc.text(xvaluepos, x, ": perorangan");
		x = newline(x,15);

		doc.setFontSize(13);
		doc.text(20, x, "4. Gambar Survey");
		x = newline(x,15);
		doc.setFontSize(11);
		doc.text(20, x, "Location");
		doc.text(xvaluepos, x, ": Tukul Jaya");
		x = newline(x,15);
		doc.text(20, x, "Elevation");
		doc.text(xvaluepos, x, ": perorangan");
		console.log(rageguy);
		doc.addImage(rageguy, 'JPEG', 15, x, 180, 160);
		x = newline(x,185);

		doc.addImage(rageguy, 'JPEG', 15, x, 360, 320);
		x = newline(x,15);


		outp = 'datauri';
		switch (outp){
			case 'datauri':
				doc.output('datauri');
			break;
			case 'pdf':
				doc.save(settings.filename+'padinet.pdf');
			break;
		}
	}
	$('#downloadPDF2').click(function(){
		demoFromHTML2({
			filename:'xxx.pdf',
		});
	});
}(jQuery));
