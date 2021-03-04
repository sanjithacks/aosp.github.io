$(document).ready(function (){
 $("#close").click(function (){
   $("#overlay").fadeOut();
 });
  $("img.iLogo").click(function (){
    
    /* [romId, website url, github page, telegram channel]*/
    const Datas = [
	["AospExtended", "https://downloads.aospextended.com,https://github.com/AospExtended,https://t.me/aospextendedgroup"],
	
	["AncientOs", "https://ancient.id/,https://github.com/ancient-devices,https://t.me/ancientrom"],

	["aosip", "https://aosip.dev/,https://github.com/AOSiP,https://t.me/aosipreleases"],

	["ArrowOs", "https://arrowos.net/,https://github.com/arrowos,https://t.me/arrowos"],

	["BlissRom", "https://blissroms.com/,https://github.com/BlissRoms,https://t.me/BlissROM_Updates"],

	["bootleggers", "https://www.bootleggersrom.xyz/,https://github.com/BootleggersROM,https://t.me/keepthebootleg"],

	["CandyRoms", "https://candyroms.org/,https://github.com/CandyRoms,https://t.me/candyrom"],

	["CarbonRom", "https://carbonrom.org/,https://github.com/CarbonROM,https://t.me/CarbonROM"],

	["ColtOs", "https://sourceforge.net/projects/coltos/files/,https://github.com/ColtOS-Devices,https://t.me/ColtOSOfficial"],

	["ConquerOs", "https://sourceforge.net/projects/conqueros/files/,https://github.com/ConquerOS,https://t.me/ConquerOSUpdates"],

	["CorvusOs", "https://www.corvusrom.com/,https://github.com/Corvus-ROM,https://t.me/CorvusChannel"],

	["CosmicOs", "https://cosmic-os.github.io/,https://github.com/Cosmic-OS,https://t.me/CosmicOS_Official"],

	["CrDroid", "https://crdroid.net/,https://github.com/crdroidandroid,https://t.me/crDroidAndroid"],

	["CypherOs", "https://www.google.com/search?q=CypherOs,https://github.com/CypherOS,https://t.me/AOSCPCommunity"],

	["DerpFest", "https://derpfest.org/,https://github.com/DerpLab,https://t.me/derpfestupdates"],

	["Descendant", "https://descendant.me/,https://github.com/Descendant-xi,https://t.me/descendant_labyrinth_support/"],

	["DirtyUnicorn", "https://dirtyunicorns.com/,https://github.com/DirtyUnicorns,https://www.google.com/search?q=DirtyUnicorn"],

	["dotOs", "https://www.droidontime.com/,https://github.com/dotos,https://t.me/dotOSchannel"],

	["EvolutionX", "https://evolution-x.org/,https://github.com/Evolution-X,https://t.me/EvolutionXOfficial"],

	["FlokoROM", "https://floko.maud.io/,https://github.com/FlokoROM,https://www.google.com/search?q=FlokoRom+Os"],

	["FusionOs", "https://www.google.com/search?q=FusionOs+Rom,https://github.com/Fusion-OS,https://www.google.com/search?q=FusionOs"],
	
	["GrapheneOs", "https://grapheneos.org/,https://github.com/GrapheneOS,https://github.com/GrapheneOS,https://www.google.com/search?q=GrapheneOS"],
	
	["HavocOs", "https://havoc-os.com/,https://github.com/Havoc-OS,https://t.me/Havoc_OS"],

	["ionOs", "https://sourceforge.net/projects/i-o-n/files/,https://www.google.com/search?q=IonOs+github,https://www.google.com/search?q=IonOs+Telegram"],

	["KomodoOs", "https://komodo-os.my.id/,https://github.com/Komodo-OS-Rom,https://t.me/KomodOSRom"],

	["LegionOs", "https://legionos.org/,https://github.com/Project-LegionOS,https://t.me/legionUpdates"],

	["lineageos", "https://lineageos.org/,https://github.com/lineageos,https://t.me/LineageOs"],

	["MokeeRom", "https://www.mokeedev.com/en/,https://github.com/MoKee,https://t.me/MokeeDownloads"],

	["msmExtended", "https://msmxtended.org/,https://github.com/Project-Xtended,https://t.me/XtendedOfficial"],

	["NitrogenProject", "https://sourceforge.net/projects/nitrogen-project/files/,https://github.com/nitrogen-project,https://t.me/nitrogenoschannel"],

	["NusantaraProject", "https://nusantaraproject.my.id/,https://github.com/NusantaraProject-ROM,https://t.me/NusantaraUpdates"],

	["OctaviOs", "https://octavi-os.com/,https://github.com/Octavi-OS,https://t.me/octavi_os"],

	["ParanoidAndroid", "https://aospa.co/,https://github.com/AOSPA,https://www.google.com/search?q=Paranoid+Android"],

	["PixelDustProject", "https://sourceforge.net/projects/pixeldustproject/files/,https://github.com/PixelDust-Project-X,https://www.google.com/search?q=PixelDustProject"],

	["PixelExperience", "https://download.pixelexperience.org/, https://github.com/PixelExperience,https://t.me/PixelExperience"],

	["PixelPlusUI", "https://sourceforge.net/projects/pixelplusui-project/files/,https://github.com/PixelPlusUI,https://t.me/ppuich"],

	["PixysOs", "https://pixysos.com/,https://github.com/PixysOS,https://t.me/PixysOS"],

	["POSPproject", "https://potatoproject.co/,https://github.com/PotatoProject,https://t.me/SaucyPotatoesOfficial"],
	
	["PostmarketOs", "https://wiki.postmarketos.org/wiki/Devices,https://github.com/postmarketOS/,https://www.google.com/search?q=postmarketOS"],

	["Project404", "https://project404.co/,https://github.com/P-404,https://telegram.me/project_404"],

	["ProjectSAKURA", "https://projectsakura.xyz/,https://github.com/ProjectSakura,https://t.me/ProjectSakura"],

	["ReloadedOs", "https://reloadedos.org/,https://github.com/reloadedos,https://t.me/reloadedos"],

	["ResurrectionRemix", "https://resurrectionremix.com/,https://github.com/ResurrectionRemix,https://t.me/ResurrectionRemixChannel"],

	["ShapeShift", "https://sourceforge.net/projects/shapeshiftos/files/,https://github.com/ShapeShiftOS,https://t.me/ShapeShiftOSChannel"],

	["StagOs", "https://stag-os.org/,https://github.com/StagOS,https://www.google.com/search?q=StagOs"],

	["SuperiorOs", "https://superioros.github.io/download.html,https://github.com/SuperiorOS,https://t.me/superior_os"],

	["syberiaOs", "https://syberiaos.com/,https://github.com/syberia-project,https://www.google.com/search?q=SyberiaOs+Rom"],
	
	["Ubports", "https://devices.ubuntu-touch.io/,https://github.com/ubports,https://www.google.com/search?q=Ubports+telegram"],
 
	["ViperOs", "https://sourceforge.net/projects/viper-project/files/,https://github.com/ViperOS,https://www.google.com/search?q=ViperOs+Rom"],
	
	["webOSport", "https://webos-ports.org/wiki/Devices,https://github.com/webOS-ports,https://www.google.com/search?q=WebOs+Ports"],
	
	["ZenXOs", "https://sourceforge.net/projects/zenx-os/files/,https://github.com/ZenX-OS,https://t.me/ZenXOSAnnoucement"]
];

var imgID = $(this).attr("id");
var imgSRC = $(this).attr("src");
    
   function findName() {
     var index=-1;
     for(var i = 0, len = Datas.length; i < len; i++){
    if(Datas[i][0] === imgID){
        index = i;
        break;
    }
}
if(index > -1){
    var romName = (Datas[index][0]);
    var romDetails = (Datas[index].join(","));
    var splits = romDetails.split(",");
    var name = splits[0];
    var website = splits[1];
    var github = splits[2];
    var telegram = splits[3];
  
    const Wimg = "<img src='download.png' width='40px' height='40px'>";
    const Gimg = "<img src='github.png' width='40px' height='40px'>";
    const Timg = "<img src='telegram.png' width='40px' height='40px'>";
    var Nm = name+"<br><br>";
    
    /*var webLink = "<a id='wlink' href="+website+'>'+Wimg+"</a>";
    var gitLink = "<a id='glink' href="+github+'>'+Gimg+"</a>";
    var telLink = "<a id='tlink' href="+telegram+'>'+Timg+"</a>";*/
    
    var webLink = "<a href='"+website+"' target='_blank'>"+Wimg+"</a>";
    var gitLink = "<a href='"+github+"' target='_blank'>"+Gimg+"</a>";
    var telLink = "<a href='"+telegram+"' target='_blank'>"+Timg+"</a>";
    var getAll = name +"<br>" + webLink +"<br>" + gitLink +"<br>" +telLink +"<br>";
    var linker = "<ul id='bucket'><li>"+webLink+"</li><li>"+gitLink+"</li><li>"+telLink+"</li></ul>";
    
    $("#overlay").css({"text-align":"center","color":"#000000","background-position": "center center", "background-size": "cover"}).fadeIn(300);
    $("#res").html(Nm+linker);
}

   };
  findName();
  });
});