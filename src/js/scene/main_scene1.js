var g_autoRotate=!true;

var g_container = document.getElementById( 'mark_container' );

var g_INTERSECTED,g_raycaster = new THREE.Raycaster();

CView.CView_p_CView[0].CView_p_CView_p_fov=30;
CView.CView_m_Init();
var g_camera, g_scene, g_renderer;

g_camera=CView.CView_p_CView[0].CView_p_CView_p_camera;
CCamera.CCamera_p_camera=g_camera;
var g_controls = new THREE.OrbitControls(g_camera);


g_renderer = new THREE.WebGLRenderer( {antialias: true,alpha:true,preserveDrawingBuffer: true});
g_renderer.setPixelRatio( window.devicePixelRatio );
g_renderer.setSize( window.innerWidth, window.innerHeight );
g_renderer.sortObjects = false;

g_container.appendChild( g_renderer.domElement );


g_3DObjInit();

if(typeof(num)=="undefined"){
	num=Math.floor(Math.random()*10%12)+1;
}
//console.log(num-1,result);
g_GreateBlessWord(num-1);

var g_color,g_cameraDis=10;
var g_once=true;
var g_isOpenControls=false;
var g_counter_test=0;

var g_controlsLastPolarAngle;
var g_controlsLastAzimuthAngle;

var g_isInitCounter=0;
var g_Interval=null;
var g_clickBlossomCounter={xin:false,nian:false,kuai:false,le:false};
var g_isOpenClick3DObj=true;
var g_render = function () {
	CWin.CWin_m_onWindowResize();
	
	CView.CView_m_update();
	if(g_isInitCounter==0){
		g_controls.minDistance = 0.0001;
		g_controls.maxDistance = 0.0001;
		g_controls.enablePan = true; 
		g_controls.userPanSpeed = 1;
		g_controls.enabled=false;
		g_controls.autoRotate=false;
		g_controls.target.copy({x:g_helper2.position.x,y:g_helper2.position.y,z:g_helper2.position.z});
		// g_controlsLastPolarAngle=g_controls.minPolarAngle = g_controls.maxPolarAngle = (g_polarAngle==null)?Math.PI / 2:g_polarAngle;
		// g_controlsLastAzimuthAngle=g_controls.minAzimuthAngle = g_controls.maxAzimuthAngle = (g_azimuthAngle==null)?CFunc.CFunc_m_GetPointToPointRotation(g_startX,g_startZ,g_targetX,g_targetZ):g_azimuthAngle;
		g_controls.update();
		g_camera.lookAt({x:g_helper.position.x,y:g_avatarHeight,z:g_helper.position.z});
	}else
	if(g_isInitCounter==1){
		g_isInitCounter=2;
		g_controls.enabled=true;
		g_CameraPlayAutoMove(0);
	}else
	if(g_isInitCounter==3){
		g_isInitCounter=4;
		g_isOpenControls=false;
		g_controls.enabled=true;
		g_controls.minDistance = 82.73555286665884;
		g_controls.maxDistance = 82.73555286665884;
		g_controls.target.copy({x:g_targetX,y:g_targetY,z:g_targetZ});
		g_controls.minPolarAngle = g_controls.maxPolarAngle = g_controlsLastPolarAngle;
		g_controls.minAzimuthAngle = g_controls.maxAzimuthAngle=g_controlsLastAzimuthAngle;
		g_controls.update();
		}else
	if(g_isInitCounter==4){
		g_controls.minDistance = 20;
		g_controls.maxDistance = 150;
		//g_controls.minPolarAngle = g_controls.maxPolarAngle = g_controlsLastPolarAngle;
	}else 
	if(g_isOpenClick3DObj){
		if(g_isOpenControls && (CCamera.CCamera_p_action=="CCamera_p_action_mark_stand" || CCamera.CCamera_p_action=="CCamera_p_action_mark_loading")) {
			g_controls.enabled=true;
			if(g_once){
				g_once=false;
				
				g_helper2.position.copy({x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y-g_avatarHeight,z:CCamera.CCamera_p_camera.position.z});
				g_helper3.position.copy(g_helper2.position);
				g_controls.target.copy(CCamera.CCamera_p_camera.position);
				
				CMouse.CMouse_p_counter=0;
				
				if(CCamera.CCamera_p_moveMode=='mark_manual' || CCamera.CCamera_p_moveMode=='mark_auto2'){
					g_controls.minPolarAngle = g_controlsLastPolarAngle;
					g_controls.maxPolarAngle = g_controlsLastPolarAngle;
					g_controls.minAzimuthAngle = g_controlsLastAzimuthAngle;
					g_controls.maxAzimuthAngle = g_controlsLastAzimuthAngle;
					if(CCamera.CCamera_p_lastAction!='CCamera_p_action_mark_move' || CCamera.CCamera_p_action=='CCamera_p_action_mark_stand')g_controls.update();
				}
			}
		}else{
			g_isOpenControls=!false;
			g_controls.enabled=false;
		}
	}
	
	g_Click_3DObj();
	g_update_3DObj();

	if(CCamera.CCamera_p_moveMode=='mark_manual->auto'){
		CCamera.CCamera_m_Turn({x:0,y:CCamera.CCamera_p_camera.position.y,z:0},0.06,function(){
			CCamera.CCamera_p_lastMoveMode=CCamera.CCamera_p_moveMode;
			CCamera.CCamera_p_moveMode='mark_auto';
			console.log('mark_auto over');
		});
	}
	if(CCamera.CCamera_p_moveMode=='mark_auto'){//auto move and look at only one focus
		CCamera.CCamera_p_isOpenTurnAction = false;
		var g_render_v_times	=	CCamera.CCamera_m_GoRounds(0,function(CCamera_m_GoRounds_vp_times){
							if(CCamera_m_GoRounds_vp_times==1){
								return 'mark_stop';
							}else
							if(CCamera_m_GoRounds_vp_times==2){
								return 'mark_stop';
							}
						});
		if(g_render_v_times===0){
			CCamera.CCamera_p_isOpenTurnAction = false;
			CCamera.CCamera_m_CheckEnterArea([{position:CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex]}]);
			CCamera.CCamera_p_FocusPosWithDis={x:g_targetX,y:g_targetY,z:g_targetZ};
			g_camera.lookAt(CCamera.CCamera_p_FocusPosWithDis);
		}else
		/* if(g_render_v_times===1){
			CCamera.CCamera_m_CheckEnterArea([{position:CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex]}]);
			CCamera.CCamera_p_isOpenTurnAction = true;
		}else */
		if(!g_render_v_times){
			var g_tmpInterval=window.setInterval(function(){
				clearInterval(g_tmpInterval);
				CCamera.CCamera_p_amination='mark_fov_enterScene';
				g_CameraStopAutoMove(1);
			},100);
		}
	}
	if(CCamera.CCamera_p_amination=='mark_fov_enterScene'){
		g_camera.fov=CFunc.CFunc_m_Graduation(90,g_camera.fov,0.5);
		if(g_camera.fov==90){
			CCamera.CCamera_p_amination=null;
			g_tips.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
		}
	}
	if(CCamera.CCamera_p_moveMode=='mark_auto2'){//auto move and look at next target
		CCamera.CCamera_p_isOpenTurnAction = true;
		
		var g_render_v_times	=	CCamera.CCamera_m_GoRounds(1,null);
		if(g_render_v_times===0){
			CCamera.CCamera_m_CheckEnterArea([{position:CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex]}]);
			CCamera.CCamera_p_isOpenTurnAction = true;
		}else
		if(!g_render_v_times){
			var g_tmpInterval=window.setInterval(function(){
				clearInterval(g_tmpInterval);
				g_CameraStopAutoMove(0);
			},100);
		} 
	}
	if(CCamera.CCamera_p_moveMode=='mark_auto3'){//auto move and look at only one focus
		CCamera.CCamera_p_isOpenTurnAction = false;
		var g_render_v_times	=	CCamera.CCamera_m_GoRounds(0,function(CCamera_m_GoRounds_vp_times){
							if(CCamera_m_GoRounds_vp_times==1){
								return 'mark_stop';
							}else
							if(CCamera_m_GoRounds_vp_times==2){
								return 'mark_stop';
							}
						});
		if(g_render_v_times===0){
			CCamera.CCamera_p_isOpenTurnAction = false;
			CCamera.CCamera_m_CheckEnterArea([{position:CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex]}]);
			CCamera.CCamera_p_FocusPosWithDis={x:g_targetX,y:g_targetY,z:g_targetZ};
			g_camera.lookAt(CCamera.CCamera_p_FocusPosWithDis);
		}else
		/* if(g_render_v_times===1){
			CCamera.CCamera_m_CheckEnterArea([{position:CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex]}]);
			CCamera.CCamera_p_isOpenTurnAction = true;
		}else */
		if(!g_render_v_times){
			var g_tmpInterval=window.setInterval(function(){
				clearInterval(g_tmpInterval);
				g_CameraStopAutoMove3(1);
				g_isInitCounter=3;
			},100);
		}
	}	
	var g_render_v_tmp = CCamera.CCamera_m_GetPolarAngleAndAzimuthAngle(null);
	g_controlsLastPolarAngle=g_render_v_tmp.polarAngle;
	g_controlsLastAzimuthAngle=g_render_v_tmp.azimuthalAngle;

	requestAnimationFrame( g_render );
};

function g_CheckMissionComplete(key){
	g_clickBlossomCounter[key]=true;
	if(	g_clickBlossomCounter.xin &&	
		g_clickBlossomCounter.nian &&
		g_clickBlossomCounter.kuai &&
		g_clickBlossomCounter.le
	){
		g_isOpenClick3DObj=false;
		g_controls.enabled=false;
		var g_Interval = setInterval(function(){
			clearInterval(g_Interval);
			$('body').trigger('labelOpen');
		},1500);
	}
}

function g_CameraPlayAutoMove3(){
	if(	CCamera.CCamera_p_action=="CCamera_p_action_mark_loading" || 
		CCamera.CCamera_p_action=="CCamera_p_action_mark_stand"
	){
		CCamera.CCamera_p_moveSpeed=1;
		CCamera.CCamera_p_moveDistanceDif=0.000001;
		CCamera.CCamera_p_targetDis=0.4;
		//g_controls.autoRotateSpeed=-2.0;
		CMouse.CMouse_m_onMouseDown();
		CCamera.CCamera_p_lastMoveMode=CCamera.CCamera_p_moveMode;
		CCamera.CCamera_p_moveMode='mark_auto3';

		CCamera.CCamera_p_GoRoundsPointSet=[
/* 			{x:0.00552,y:-1.21771,z:28.9137,mod:0},	
			{x:0.00552,y:-1.21771,z:50.3026,mod:0},
			{x:7.63673,y:2.92741,z:65.998,mod:0},
			{x:25.9185,y:18.8327,z:40.0249,mod:0}, */
			{x:9.43326,y:9.76936,z:32.5584,mod:0},
			{x:13.6943,y:32.0662,z:80.9523,mod:0},
			{x:46.16,y:31.2128,z:70.6098,mod:0}
			// {x:7.63673,y:2.92741,z:65.998,mod:0},
			// {x:36.9185,y:18.8327,z:91.0249,mod:0}
			// {x:69.5312,y:36.5472,z:118.636,mod:0},
			// {x:154.319,y:82.6022,z:201.969,mod:0}
		];		

		CCamera.CCamera_p_GoRoundsPointSetCurIndex=0;//CFunc.CFunc_m_GetTheNearestPointFromPointSet(CCamera.CCamera_p_camera.position,CCamera.CCamera_p_GoRoundsPointSet);

	}	
}

function g_CameraPlayAutoMove2(startGroundName,startGroundPoint,endGroundName,endGroundPoint){
	if(	CCamera.CCamera_p_action=="CCamera_p_action_mark_loading" || 
		CCamera.CCamera_p_action=="CCamera_p_action_mark_stand"
	){
		CCamera.CCamera_p_moveSpeed=0.09;
		CCamera.CCamera_p_moveDistanceDif=0.0000001;
		CCamera.CCamera_p_targetDis=0.1;
		CCamera.CCamera_p_turnSpeed=0.06
		//g_controls.autoRotateSpeed=-2.0;
		CMouse.CMouse_m_onMouseDown();
		CCamera.CCamera_p_lastMoveMode=CCamera.CCamera_p_moveMode;
		CCamera.CCamera_p_moveMode='mark_auto2';
		
		CCamera.CCamera_p_GoRoundsPointSet=GetRouteSet(startGroundName,startGroundPoint,endGroundName,endGroundPoint);
		CCamera.CCamera_p_GoRoundsPointSetCurIndex=0;
		//console.log(CFunc.CFunc_m_Get3DPointTo3DPointDistance(CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex],CCamera.CCamera_p_camera.position));
		if(
			CFunc.CFunc_m_Get3DPointTo3DPointDistance(CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex],CCamera.CCamera_p_camera.position)<2.7 &&
			1<CCamera.CCamera_p_GoRoundsPointSet.length
		)
			CCamera.CCamera_p_GoRoundsPointSetCurIndex=1;

	}	
}

function g_CameraPlayAutoMove(){
	if(	CCamera.CCamera_p_action=="CCamera_p_action_mark_loading" || 
		CCamera.CCamera_p_action=="CCamera_p_action_mark_stand"
	){
		CCamera.CCamera_p_moveSpeed=0.7;
		CCamera.CCamera_p_moveDistanceDif=0.000001;
		CCamera.CCamera_p_targetDis=0.4;
		//g_controls.autoRotateSpeed=-2.0;
		CMouse.CMouse_m_onMouseDown();
		CCamera.CCamera_p_lastMoveMode=CCamera.CCamera_p_moveMode;
		CCamera.CCamera_p_moveMode='mark_auto';
		
		CCamera.CCamera_p_GoRoundsPointSet=[

		{x:44.723,y:100.813,z:70.9048,mod:0},
		{x:4.18222,y:35.8329,z:84.3174,mod:0},
		{x:4.83178,y:3,z:100.3433,mod:0},
		{x:4.83178,y:3,z:60.3433,mod:0},
		{x:4.83178,y:-0.663925,z:29.3433,mod:0}

		];

		CCamera.CCamera_p_GoRoundsPointSetCurIndex=0;//CFunc.CFunc_m_GetTheNearestPointFromPointSet(CCamera.CCamera_p_camera.position,CCamera.CCamera_p_GoRoundsPointSet);

	}	
}

function g_CameraStopAutoMove(mode){
	var g_CameraStopAutoMove_v_tmp=CCamera.CCamera_m_GetPolarAngleAndAzimuthAngle('mark_auto');
	g_controlsLastPolarAngle=g_controls.minPolarAngle = g_controls.maxPolarAngle = g_CameraStopAutoMove_v_tmp.polarAngle;
	g_controlsLastAzimuthAngle=g_controls.minAzimuthAngle = g_controls.maxAzimuthAngle = g_CameraStopAutoMove_v_tmp.azimuthalAngle;
	CCamera.CCamera_p_moveSpeed=0.06;
	CCamera.CCamera_p_moveDistanceDif=0.06;
	CCamera.CCamera_p_targetDis=3.5;
	CCamera.CCamera_p_lastMoveMode=CCamera.CCamera_p_moveMode;
	CCamera.CCamera_p_moveMode='mark_manual';
	CCamera.CCamera_p_action='CCamera_p_action_mark_stand';
	if(mode==1){
		g_once=true;
	}
	CCamera.CCamera_p_counter=0;
	
	CCamera.CCamera_p_isGoRoundsRunning=true;
	CCamera.CCamera_p_GoRoundsCounter=0;
	CCamera.CCamera_p_FocusPosWithDis=null;	
}

function g_CameraStopAutoMove3(mode){
	if(mode==1){
		var g_CameraStopAutoMove3_v_tmp=CCamera.CCamera_m_GetPolarAngleAndAzimuthAngle('mark_auto3');
		g_controlsLastPolarAngle=g_controls.minPolarAngle = g_controls.maxPolarAngle = g_CameraStopAutoMove3_v_tmp.polarAngle;
		g_controlsLastAzimuthAngle=g_controls.minAzimuthAngle = g_controls.maxAzimuthAngle = g_CameraStopAutoMove3_v_tmp.azimuthalAngle;
	}
	CCamera.CCamera_p_moveSpeed=0.06;
	CCamera.CCamera_p_moveDistanceDif=0.06;
	CCamera.CCamera_p_targetDis=3.5;
	CCamera.CCamera_p_lastMoveMode=CCamera.CCamera_p_moveMode;
	CCamera.CCamera_p_moveMode='mark_manual';
	CCamera.CCamera_p_action=null;
	g_once=true;
	CCamera.CCamera_p_counter=0;
	
	CCamera.CCamera_p_isGoRoundsRunning=true;
	CCamera.CCamera_p_GoRoundsCounter=0;
	CCamera.CCamera_p_FocusPosWithDis=null;
	$('body').trigger('alreadyBack');

}

function GetRouteSet(startGroundName,startGroundPoint,endGroundName,endGroundPoint){
	var GetRouteSet_v_result=[];
	var GetRouteSet_v_n2pointSet={
			mark_ground_1:		[
									{n:'g1',x:5.2051,z:12.5339,y:-2.3321+g_avatarHeight,mod:0}
								],
			mark_ground_2:		null,
			mark_ground_3:		null,
			mark_ground_stair1:	[
									{n:'s1.low',x:-3.1206,z:8.6342,y:-2.3321+g_avatarHeight,mod:0},
									{n:'s1.high',x:-6.9476,z:8.8690,y:-0.2345+g_avatarHeight,mod:0}
								],
			mark_ground_stair2:	[
									{n:'s2.low',x:5.4821,z:5.7242,y:-2.3321+g_avatarHeight,mod:0},
									{n:'s2.high',x:5.5450,z:1.4995,y:-0.3261+g_avatarHeight,mod:0}
								],
			mark_ground_4:		null,
			mark_ground_stair3:	[
									{n:'s3.low',x:-5.8432,z:2.8926,y:0+g_avatarHeight,mod:0},
									{n:'s3.high',x:-5.7529,z:0.7609,y:1.1811+g_avatarHeight,mod:0}
								],
			mark_ground_5:		null,
			mark_ground_bridge:	[
									{n:'b.left',x:0.4727,z:-0.9375,y:1.1811+g_avatarHeight,mod:0},
									{n:'b.right',x:4.6843,z:-0.8979,y:1.1811+g_avatarHeight,mod:0}
								],
			mark_ground_6:		null
	};
	var GetRouteSet_v_pathSet=[
					['mark_ground_1','mark_ground_2','mark_ground_stair1','mark_ground_4','mark_ground_stair3','mark_ground_5','mark_ground_bridge','mark_ground_6'],
					['mark_ground_1','mark_ground_2','mark_ground_3','mark_ground_stair2','mark_ground_4','mark_ground_stair3','mark_ground_5','mark_ground_bridge','mark_ground_6'],
					['mark_ground_stair1','mark_ground_2','mark_ground_3','mark_ground_stair2']
				];
				
	var GetRouteSet_v_pathInfo={path:null,s:null,e:null};
	for(var GetRouteSet_v_i in GetRouteSet_v_pathSet){
		GetRouteSet_v_pathInfo.path=GetRouteSet_v_i;
		for(var GetRouteSet_v_j in GetRouteSet_v_pathSet[GetRouteSet_v_i]){
			if(GetRouteSet_v_pathSet[GetRouteSet_v_i][GetRouteSet_v_j]==startGroundName) 	
				GetRouteSet_v_pathInfo.s=GetRouteSet_v_j;
			if(GetRouteSet_v_pathSet[GetRouteSet_v_i][GetRouteSet_v_j]==endGroundName) 	
				GetRouteSet_v_pathInfo.e=GetRouteSet_v_j;
		}
		if(GetRouteSet_v_pathInfo.s!=null && GetRouteSet_v_pathInfo.e!=null) 
			break;
	}

	if(GetRouteSet_v_pathInfo.s!=GetRouteSet_v_pathInfo.e){
		for(var GetRouteSet_v_i=Math.min(GetRouteSet_v_pathInfo.s,GetRouteSet_v_pathInfo.e);GetRouteSet_v_i<=Math.max(GetRouteSet_v_pathInfo.s,GetRouteSet_v_pathInfo.e);GetRouteSet_v_i++){
			if(GetRouteSet_v_n2pointSet[GetRouteSet_v_pathSet[GetRouteSet_v_pathInfo.path][GetRouteSet_v_i]]!=null)
				for(var GetRouteSet_v_j in GetRouteSet_v_n2pointSet[GetRouteSet_v_pathSet[GetRouteSet_v_pathInfo.path][GetRouteSet_v_i]])
					GetRouteSet_v_result.push(GetRouteSet_v_n2pointSet[GetRouteSet_v_pathSet[GetRouteSet_v_pathInfo.path][GetRouteSet_v_i]][GetRouteSet_v_j]);
		}
	}
	if(GetRouteSet_v_pathInfo.s>GetRouteSet_v_pathInfo.e) GetRouteSet_v_result.reverse();
	if(GetRouteSet_v_n2pointSet[startGroundName]!=null && GetRouteSet_v_n2pointSet[startGroundName].length>1) GetRouteSet_v_result.shift();
	if(GetRouteSet_v_n2pointSet[endGroundName]!=null && GetRouteSet_v_n2pointSet[endGroundName].length>1) GetRouteSet_v_result.pop();
	
	GetRouteSet_v_result.push(endGroundPoint);

	
	return GetRouteSet_v_result;
}

function g_EnterScene(){
	//CMouse.CMouse_m_Init();
	g_isInitCounter=1;
	//g_render();	
}

$(function () {

	
	$('body').trigger('load',[[
		'model/mainscene/box.json',
		'model/mainscene/floor01.json',
		'model/mainscene/floor02.json',
		'model/mainscene/floor03.json',
		'model/mainscene/floor04.json',
		'model/mainscene/sky.json',
		'model/mainscene/2018.jpg',
		'model/mainscene/bamboo.jpg',
		'model/mainscene/bridge.jpg',
		'model/mainscene/entrance.jpg',
		'model/mainscene/firecracker01.jpg',
		'model/mainscene/firecracker02.jpg',
		'model/mainscene/floor01.jpg',
		'model/mainscene/floor02.jpg',
		'model/mainscene/floor03.jpg',
		'model/mainscene/floor04.jpg',
		'model/mainscene/icm.jpg',
		'model/mainscene/lantern01.jpg',
		'model/mainscene/lantern02.jpg',
		'model/mainscene/lantern03.jpg',
		'model/mainscene/orange02.jpg',
		'model/mainscene/pergola01.jpg',
		'model/mainscene/roof01.jpg',
		'model/mainscene/roof02.jpg',
		'model/mainscene/roof03.jpg',
		'model/mainscene/roof04.jpg',
		'model/mainscene/roof05.jpg',
		'model/mainscene/sky.jpg',
		'model/mainscene/stair.jpg',
		'model/mainscene/stone.jpg',
		'model/mainscene/tree01.jpg',
		'model/mainscene/tree02.jpg'
	]]);
	$('body').on('loaded',function(){
		var g_Interval = setInterval(function(){
			if(CModel.CModel_p_IsAllLoadingFinish){
				clearInterval(g_Interval);
				CMouse.CMouse_m_Init();
				//g_isInitCounter=1;
				g_render();	
			}			
		},1000);
	});
	$('body').on('enter',function(e){
		if(CModel.CModel_p_IsAllLoadingFinish){
			//clearInterval(g_Interval);
			g_EnterScene();
		}
	});
	$('body').on('backToStart',function(e){
		g_camera.fov=30;
		g_CameraPlayAutoMove3();
		
		g_xin.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		g_nian.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		g_kuai.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		g_le.CModel_m_CreateModelByJson_v_model_p_mesh.visible=false;
		
		g_blessword_0.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
		g_blessword_1.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
		g_blessword_2.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
		g_blessword_3.CModel_m_CreateModelByJson_v_model_p_mesh.visible=true;
	});
	/* $('body').on('touchstart',function(e){
		if($(e.target).attr('id') === 'mark_container'){
			e.preventDefault();
		}
	});
	$('body').on('card-close',function(e){
		g_controls.pose();
	}); */

});