function g_3DObjInit(){
	//Ground
	window.g_ground1 = CModel.CModel_m_CreateModelByJson('model/mainscene/floor01.json',"mark_ground_1",0,0,0,0,0,0,1);
	window.g_ground2 = CModel.CModel_m_CreateModelByJson('model/mainscene/floor02.json',"mark_ground_2",0,0,0,0,0,0,1);
	window.g_ground3 = CModel.CModel_m_CreateModelByJson('model/mainscene/floor03.json',"mark_ground_3",0,0,0,0,0,0,1);
	window.g_ground4 = CModel.CModel_m_CreateModelByJson('model/mainscene/floor04.json',"mark_ground_4",0,0,0,0,0,0,1);
	window.g_ground5 = CModel.CModel_m_CreateModelByJson('model/mainscene/floor05.json',"mark_ground_5",0,0,0,0,0,0,1);
	window.g_ground6 = CModel.CModel_m_CreateModelByJson('model/mainscene/floor06.json',"mark_ground_6",0,0,0,0,0,0,1);
	window.g_bridge  = CModel.CModel_m_CreateModelByJson('model/mainscene/bridge.json',"mark_ground_bridge",0,0,0,0,0,0,1);
	window.g_stair01 = CModel.CModel_m_CreateModelByJson('model/mainscene/stair01.json',"mark_ground_stair1",0,0,0,0,0,0,1);
	window.g_stair02 = CModel.CModel_m_CreateModelByJson('model/mainscene/stair02.json',"mark_ground_stair2",0,0,0,0,0,0,1);
	window.g_stair03 = CModel.CModel_m_CreateModelByJson('model/mainscene/stair03.json',"mark_ground_stair3",0,0,0,0,0,0,1);


	//sky
	//window.g_sky = CModel.CModel_m_CreateModelByJson('model/mainscene/sky.json',"mark_sky",0,0,0,0,0,0,1);


	//3dobj
	window.g_tips = CModel.CModel_m_CreateModelByJson('model/3dobj/tishi/tishi.json',"mark_tips",5,0,0,0,0,0,1);
	g_tips.CModel_m_CreateModelByJson_v_model_p_visible=false;


	window.g_cloud_1 = CModel.CModel_m_CreateModelByJson('model/3dobj/cloud/cloud.json',"mark_cloud_1",-17.46246,0.96333,-10.71828,0,0,0,1);
	g_cloud_1.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_cloud_2 = CModel.CModel_m_CreateModelByJson('model/3dobj/cloud/cloud.json',"mark_cloud_2",18.08072,-8.45315,-17.19211,0,0,0,1);
	g_cloud_2.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_cloud_3 = CModel.CModel_m_CreateModelByJson('model/3dobj/cloud/cloud.json',"mark_cloud_3",11.04090,-5.06322,15.99313,0,0,0,0.7);
	g_cloud_3.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_cloud_4 = CModel.CModel_m_CreateModelByJson('model/3dobj/cloud/cloud.json',"mark_cloud_4",-4.80132,-4.51828,-14.70459,0,0,0,1);
	g_cloud_4.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_cloud_5 = CModel.CModel_m_CreateModelByJson('model/3dobj/cloud/cloud.json',"mark_cloud_5",-11.39286,-4.51828,14.86315,0,0,0,1);
	g_cloud_5.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_cloud_6 = CModel.CModel_m_CreateModelByJson('model/3dobj/cloud/cloud.json',"mark_cloud_6",16.66825,-4.21573,6.57665,0,0,0,1);
	g_cloud_6.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_xinblossom = CModel.CModel_m_CreateModelByJson('model/3dobj/clickflower/xinblossom.json',"mark_xinblossom",7.55532,-2.17264,10.19288,0,0,0,0.6);
	g_xinblossom.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	 window.g_nianblossom = CModel.CModel_m_CreateModelByJson('model/3dobj/clickflower/xinblossom.json',"mark_nianblossom",-2.22799,0,6.35551,0,0,0,0.6);
	 g_nianblossom.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_kuaiblossom = CModel.CModel_m_CreateModelByJson('model/3dobj/clickflower/xinblossom.json',"mark_kuaiblossom", -3.9,1.19536,-3.63,0,0,0,0.6);
	g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_leblossom = CModel.CModel_m_CreateModelByJson('model/3dobj/clickflower/xinblossom.json',"mark_leblossom",7.06211,1.18495,-3.65469,0,0,0,0.6);
	g_leblossom.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_xin = CModel.CModel_m_CreateModelByJson('model/3dobj/xin/xin.json',"mark_xin",8.05532,-2.17264,8.19288,0,0,0,0.8);
	g_xin.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_nian = CModel.CModel_m_CreateModelByJson('model/3dobj/nian/nian.json',"mark_nian",-3.72799,0,6.35551,0,0,0,0.8);
	g_nian.CModel_m_CreateModelByJson_v_model_p_isPlay=true;


	window.g_kuai = CModel.CModel_m_CreateModelByJson('model/3dobj/kuai/kuai.json',"mark_kuai",-2.3,1.19536,-3.63,0,0,0,0.8);
	g_kuai.CModel_m_CreateModelByJson_v_model_p_isPlay=true;

	window.g_le = CModel.CModel_m_CreateModelByJson('model/3dobj/le/le.json',"mark_le",8.76211,1.18495,-3.65469,0,0,0,0.8);
	g_le.CModel_m_CreateModelByJson_v_model_p_isPlay=true;



	window.g_blessword_0,window.g_blessword_1,window.g_blessword_2,window.g_blessword_3;

	//Dog
	//idle:10-60
	//moveForward:70-100
	//Congratulations:110——180
	//npcdog///////////////////////////////////////////////////////////////////////////////////////////////
	//window.g_dog = CModel.CModel_m_CreateModelByJson('model/3dobj/dog/dog.json',"mark_dog",7.67227,-2.31443,4.03642,0,0,0,0.08);
	window.g_dog = CModel.CModel_m_CreateModelByJson('model/3dobj/dog/dog.json',"mark_dog",-0.2051,-2.3321,12.5339,0,0,0,0.6);
	g_dog.CModel_m_CreateModelByJson_v_model_p_isPlay=true;
	g_dog.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
		{x:5.53824,y:-2.332137,z:11.68246,mod:0},
		{x:0.68787, y:-2.332137,z:11.639098,mod:0},
		{x:-2.443844,y:-2.332137,z:10.88198,mod:0},
		{x:-1.91042,y:-2.332137,z:9.453781,mod:0},
		{x:1.462195,y:-2.332137,z:9.178466,mod:0},
		{x:4.125874,y:-2.332137,z:9.674034,mod:0},
		{x:5.695172,y:-2.332137,z:9.013277,mod:0},
		{x:6.376578,y:-2.332137,z:6.927762,mod:0},
		{x:7.987175,y:-2.332137,z:6.308301,mod:0},
		{x:8.957662,y:-2.332137,z:7.382032,mod:0},
		{x:7.801336,y:-2.332137,z:9.612087,mod:0}
	];
	g_dog.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
	///////////////////////////////////////////////////////////////////////////////////////////////

	CHelper.CHelper_m_Init();
	window.g_helper=CHelper.CHelper_p_helper1;
	window.g_helper2=CHelper.CHelper_p_helper2;
	window.g_helper3=CHelper.CHelper_p_helper3;
	g_helper.visible=false;

	g_camera.lookAt({x:g_helper.position.x,y:g_avatarHeight,z:g_helper.position.z});

	window.g_clock = new THREE.Clock();
	window.g_hotspotTimer = 0;
	window.g_hotspotFocusTime = 1; 
	window.g_hotspotScale = 0.01;
	window.g_delta_time=0;

	//hotspot
	window.g_xin_hotspot = CModel.CModel_p_HotSpot.CModel_p_HotSpot_m_CreateHotSpotByImage('mark_hotspot_xin',CModel.CModel_p_scene,'images/hotspot.png',7.55532,-1.17264,10.19288,0.25*2);
	window.g_nian_hotspot = CModel.CModel_p_HotSpot.CModel_p_HotSpot_m_CreateHotSpotByImage('mark_hotspot_nian',CModel.CModel_p_scene,'images/hotspot.png',-2.22799,1,6.35551,0.25*2);
	window.g_kuai_hotspot = CModel.CModel_p_HotSpot.CModel_p_HotSpot_m_CreateHotSpotByImage('mark_hotspot_kuai',CModel.CModel_p_scene,'images/hotspot.png',-3.9,2.19536,-3.63,0.25*2);
	window.g_le_hotspot = CModel.CModel_p_HotSpot.CModel_p_HotSpot_m_CreateHotSpotByImage('mark_hotspot_le',CModel.CModel_p_scene,'images/hotspot.png',7.06211,2.18495,-3.65469,0.25*2);


}

function g_GreateBlessWord(num){
	g_blessword_0 = CModel.CModel_m_CreateModelByJson('model/3dobj/blessword/'+num+'/0.json',"mark_blessword_0",-4.72799,0,5.55551,0,0,0,1);
	g_blessword_0.CModel_m_CreateModelByJson_v_model_p_isPlay=false;
	g_blessword_0.CModel_m_CreateModelByJson_v_model_p_visible=false;
	g_blessword_1 = CModel.CModel_m_CreateModelByJson('model/3dobj/blessword/'+num+'/1.json',"mark_blessword_1",-1.4,1.19536,-3.63,0,0,0,1);
	g_blessword_1.CModel_m_CreateModelByJson_v_model_p_isPlay=false;
	g_blessword_1.CModel_m_CreateModelByJson_v_model_p_visible=false;
	g_blessword_2 = CModel.CModel_m_CreateModelByJson('model/3dobj/blessword/'+num+'/2.json',"mark_blessword_2",8.05532,-2.17264,9.19288,0,0,0,1);
	g_blessword_2.CModel_m_CreateModelByJson_v_model_p_isPlay=false;
	g_blessword_2.CModel_m_CreateModelByJson_v_model_p_visible=false;
	g_blessword_3 = CModel.CModel_m_CreateModelByJson('model/3dobj/blessword/'+num+'/3.json',"mark_blessword_3",10.06211,1.18495,-3.65469,0,0,0,1);
	g_blessword_3.CModel_m_CreateModelByJson_v_model_p_isPlay=false;
	g_blessword_3.CModel_m_CreateModelByJson_v_model_p_visible=false;
}

function g_update_3DObj(){
	g_update_cloud();
	g_update_dog();
	g_update_xinblossom();
	g_update_nianblossom();
	g_update_kuaiblossom()
	g_update_leblossom();
	g_update_blessword();
	//HotSpot
	CModel.CModel_p_HotSpot.CModel_p_HotSpot_m_UpdateHotspot(g_clock.getDelta());
}

function g_update_cloud(){
	//g_cloud
	if(	g_cloud_1.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_cloud_1.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(12,0,3,0);
	}
	if(	g_cloud_2.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_cloud_2.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(12,0,1,0);
	}
	if(	g_cloud_3.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_cloud_3.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(12,0,2,0);
	}
	if(	g_cloud_4.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_cloud_4.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(12,0,1,0);
	}
	if(	g_cloud_5.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_cloud_5.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(12,0,1,0);
	}
	if(	g_cloud_6.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_cloud_6.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(12,0,2,0);
	}
}
	
function g_update_dog(){
	//dog
	if(g_dog.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_dog.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(100,70,24,0);
		g_dog.CModel_m_CreateModelByJson_v_model_m_GoRounds();
	}else
	if(g_dog.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
		g_dog.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(190,110,24,0);
		g_dog.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}];
		g_dog.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_dog.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_dog.CModel_m_CreateModelByJson_v_model_p_nextAction=1;
	}
}
	
function g_update_xinblossom(){
	//g_xinblossom
	if(	g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_xinblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,0);
		g_xin.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		g_xinblossom.CModel_m_CreateModelByJson_v_model_p_action=='CModel_m_CreateModelByJson_v_model_p_action_mark_stand';
		g_xinblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_xinblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_xinblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
		
		g_xin.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_xin.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_xin.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_xin.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}else
	if(	g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
		g_xinblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,1);
	}else
	if(	g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		//g_xinblossom.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		if(g_xin.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
			g_xin.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
			g_xin.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(40,0,24,1);
		}
		if(g_xin.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
			g_xin.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
			g_CheckMissionComplete('xin');			
		}
	}
	
	if(	g_xin.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_xin.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_xin.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_xin.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_xin.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}

	if(	g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_xinblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_xinblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_xinblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}
}
	
function g_update_nianblossom(){
	//g_nianblossom
	if(	g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_nianblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,0);
		g_nian.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		g_nianblossom.CModel_m_CreateModelByJson_v_model_p_action=='CModel_m_CreateModelByJson_v_model_p_action_mark_stand';
		g_nianblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_nianblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_nianblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
		g_nian.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_nian.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_nian.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_nian.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}else
	if(	g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
		g_nianblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,1);
	}else
	if(	g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		//g_nianblossom.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		if(g_nian.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
			g_nian.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
			g_nian.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(40,0,24,1);
		}
		if(g_nian.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
			g_nian.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
			g_CheckMissionComplete('nian');			
		}
	}
	
	if(	g_nian.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_nian.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_nian.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_nian.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_nian.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}
	
	if(	g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_nianblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_nianblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_nianblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}
}
	
function g_update_kuaiblossom(){
	//g_kuaiblossom
	if(	g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,0);
		g_kuai.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_action=='CModel_m_CreateModelByJson_v_model_p_action_mark_stand';
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
		g_kuai.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_kuai.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_kuai.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_kuai.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}else
	if(	g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,1);
	}else
	if(	g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		//g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		if(g_kuai.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
			g_kuai.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
			g_kuai.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(40,0,24,1);
		}
		if(g_kuai.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
			g_kuai.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
			g_CheckMissionComplete('kuai');			
		}
	}
	
	if(	g_kuai.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_kuai.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_kuai.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_kuai.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_kuai.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}

	if(	g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}
}
	
function g_update_leblossom(){
	//g_leblossom
	if(	g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_leblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,0);
		g_le.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		g_leblossom.CModel_m_CreateModelByJson_v_model_p_action=='CModel_m_CreateModelByJson_v_model_p_action_mark_stand';
		g_leblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_leblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_leblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
		g_le.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_le.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_le.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_le.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}else
	if(	g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
		g_leblossom.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(17,0,6,1);
	}else
	if(	g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		//g_leblossom.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;	
		if(g_le.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
			g_le.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
			g_le.CModel_m_CreateModelByJson_v_model_m_PlayAnimation(40,0,24,1);
		}
		if(g_le.CModel_m_CreateModelByJson_v_model_p_nextAction==1){
			g_le.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
			g_CheckMissionComplete('le');			
		}
	}
	
	if(	g_le.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_le.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_le.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_le.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_le.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}
	
	if(	g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==2){
		g_leblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_leblossom.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_leblossom.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
	}
}

function g_update_blessword(){
	//g_blessword_0
	if(g_blessword_0.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_blessword_0.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_blessword_0.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_blessword_0.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_blessword_0.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}
	//g_blessword_1
	if(g_blessword_1.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_blessword_1.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_blessword_1.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_blessword_1.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_blessword_1.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}
	//g_blessword_2
	if(g_blessword_2.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_blessword_2.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_blessword_2.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_blessword_2.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_blessword_2.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}
	//g_blessword_3
	if(g_blessword_3.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
		g_blessword_3.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
			{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
		];
		g_blessword_3.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
		g_blessword_3.CModel_m_CreateModelByJson_v_model_m_GoRounds();
		g_blessword_3.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
	}	
}

function g_Click_3DObj(){
	if(g_isOpenClick3DObj)
		if(g_INTERSECTED!=null && CCamera.CCamera_p_moveMode=='mark_manual' && CCamera.CCamera_p_action=='CCamera_p_action_mark_stand'){
			if(	g_INTERSECTED.object.name=='mark_ground_1' ||
				g_INTERSECTED.object.name=='mark_ground_2' ||
				g_INTERSECTED.object.name=='mark_ground_3' ||
				g_INTERSECTED.object.name=='mark_ground_4' ||
				g_INTERSECTED.object.name=='mark_ground_5' ||
				g_INTERSECTED.object.name=='mark_ground_6' ||
				g_INTERSECTED.object.name=='mark_ground_bridge' ||
				g_INTERSECTED.object.name=='mark_ground_stair1' ||
				g_INTERSECTED.object.name=='mark_ground_stair2' ||
				g_INTERSECTED.object.name=='mark_ground_stair3' 
			) {

				g_CameraPlayAutoMove2(
					CCamera.CCamera_p_curGroundName,
					CCamera.CCamera_p_camera.position,
					g_INTERSECTED.object.name,
					{x:g_helper.position.x,y:g_helper.position.y+g_avatarHeight,z:g_helper.position.z}
				);
				g_INTERSECTED=null;
				g_tips.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
			}else
			if(	g_INTERSECTED.object.name=='mark_xinblossom' 	||	
				g_INTERSECTED.object.name=='mark_hotspot_xin' 
			){
				g_xin_hotspot.visible=false;
				if(g_dog.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
					g_clickBlossomCounter.xin=true;
					$('body').trigger('getFlower',[0]);
					g_dog.CModel_m_CreateModelByJson_v_model_p_moveSpeed=0.1;
					g_dog.CModel_m_CreateModelByJson_v_model_p_moveDistanceDif=0.1;
					g_dog.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet=[
						{x:6.3,y:-2.3321,z:10.3369,mod:0},
						{x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_camera.position.z,mod:1}
					];
					g_dog.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
					g_dog.CModel_m_CreateModelByJson_v_model_p_action=='CModel_m_CreateModelByJson_v_model_p_action_mark_stand';				
				}
				
				if(g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
					g_xinblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
					document.getElementById('bgm_clickBlossom_0').play();
					g_INTERSECTED=null;
				}
			}else
			if(	g_INTERSECTED.object.name=='mark_nianblossom' 	||	
				g_INTERSECTED.object.name=='mark_hotspot_nian' 
			){
				g_nian_hotspot.visible=false;
				if(g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){
					g_clickBlossomCounter.nian=true;
					$('body').trigger('getFlower',[1]);
					g_nianblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
					document.getElementById('bgm_clickBlossom_1').play();
					g_INTERSECTED=null;
				}
			}else
			if(	g_INTERSECTED.object.name=='mark_kuaiblossom' 	||	
				g_INTERSECTED.object.name=='mark_hotspot_kuai' 
			){
				g_kuai_hotspot.visible=false;
				if(g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){	
					g_clickBlossomCounter.kuai=true;
					$('body').trigger('getFlower',[2]);
					g_kuaiblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
					document.getElementById('bgm_clickBlossom_2').play();
					g_INTERSECTED=null;
				}
			}else
			if(	g_INTERSECTED.object.name=='mark_leblossom' 	||	
				g_INTERSECTED.object.name=='mark_hotspot_le' 
			){
				g_le_hotspot.visible=false;
				if(g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction==0){	
					g_clickBlossomCounter.le=true;
					$('body').trigger('getFlower',[3]);
					g_leblossom.CModel_m_CreateModelByJson_v_model_p_nextAction=2;
					document.getElementById('bgm_clickBlossom_3').play();
					g_INTERSECTED=null;
				}
			} else
			if(	g_INTERSECTED.object.name=='mark_dog'
			){
				document.getElementById('bgm_dog').play();
				g_INTERSECTED=null;
			}else{
				CMouse.CMouse_p_isMouseDown_ClickModel=true;
			}
		}
}