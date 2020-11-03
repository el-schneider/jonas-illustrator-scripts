//*************************************************************************************************************************//
//*************************************************************************************************************************//
//************************** 	Remplacement d'une sélection d'objets par de symboles	*****************************//
//************************** 							Un script de Loic Aigon							*****************************//
//************************** 	Si vous appréciez ce script, merci de me le faire savoir		*****************************//
//************************** 								loic_aigon@yahoo.fr						*****************************//
//*************************************************************************************************************************//
//*************************************************************************************************************************//

//*************************************************************************************************************************//
//*************************************************************************************************************************//
//************************** 			Nommer votre symbole "Dot" sans guillemets			*****************************//
//*************************************************************************************************************************//
//*************************************************************************************************************************//

var docRef=app.activeDocument;
if(docRef.selection.length>0)
{
	try{
		for(i=docRef.selection.length-1;i>=0;i--)
		{
			var iObj = docRef.selection[i];
			
			var iObjL= iObj.left;
			var iObjW = iObj.width;
			var iObjT = iObj.top;
			var iObjH = iObj.height; 
			var currDotx = iObjL; //+ (iObjW/2);
			var currDoty = iObjT;//+ (iObjH/2);
			var currDot=docRef.symbolItems.add(docRef.symbols.getByName("Dot"));
			currDot.position=[currDotx,currDoty];
			iObj.remove();
		}
		alert("J'espère que vous appréciez mon script. "+"\r" + "Si c'est le cas, envoyez- moi un petit mail !" +"\r" + "loic_aigon@yahoo.fr" + "\r" + "Retirez ce message en éditant le script" + "\r" + "Enlever la ligne "+"\"" +"Alert(\"J'espere...);");
	}
	catch(e)
	{
		alert("Il faut nommer votre symbole \"Dot\"");
	}
}
else
{
	alert("Vous n'avez rien sélectionné !");
}