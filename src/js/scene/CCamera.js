var CCamera = {
	CCamera_p_moveMode:null,
	CCamera_p_amination:null,
	CCamera_p_camera:null,
	//CCamera_p_angleY:0,
	CCamera_p_targetDis:3.5,
	CCamera_p_targetPosition:null,
	CCamera_p_lastAction:"CCamera_p_action_mark_loading",
	CCamera_p_action:"CCamera_p_action_mark_loading",
	CCamera_p_speedRatio:null,
	CCamera_p_moveSpeed:0.06,
	CCamera_p_turnSpeed:0.06,
	CCamera_p_moveDistanceDif:0.06,
	CCamera_p_curGroundName:'mark_ground_1',
	CCamera_p_targetGroundName:'mark_ground_1',
	CCamera_p_isTurnInit:true,
	CCamera_p_turnAngleDif:0.000000000001,
	CCamera_p_turnOnAcceleration:false,
	CCamera_p_GoRoundsPointSet:[],
	CCamera_p_GoRoundsPointSetCurIndex:null,
	CCamera_p_GoRoundsCounter:0,
	CCamera_p_isGoRoundsRunning:true,
	CCamera_p_counter:0,
	CCamera_p_isInit:true,
	CCamera_p_isOpenTurnAction:true,
	CCamera_p_FocusPosWithDis:null,
	CCamera_m_Init:function(){
		
	},
	CCamera_m_SetAction:function(CCamera_m_SetAction_vp_Status){
		if(CCamera.CCamera_p_lastAction!=CCamera.CCamera_p_action)CCamera.CCamera_p_lastAction=CCamera.CCamera_p_action;
		CCamera.CCamera_p_action=CCamera_m_SetAction_vp_Status;
	},
	CCamera_m_Turn:function(CCamera_m_Turn_vp_targetPos,CCamera_m_Turn_vp_speed,CCamera_m_Turn_vp_callback){//call this function,after the CCamera.CCamera_m_GridLocationToFocusPos
		var CCamera_m_Turn_v_dis=CFunc.CFunc_m_Get3DPointTo3DPointDistance(g_camera.position,CCamera_m_Turn_vp_targetPos);
		if(CCamera.CCamera_p_isTurnInit){
			CCamera.CCamera_p_isTurnInit=false;
			var CCamera_m_Turn_v_tmp=CCamera.CCamera_m_GetPolarAngleAndAzimuthAngle(null);
			CCamera.CCamera_m_GridLocationToFocusPos(
				g_camera.position,
				CCamera_m_Turn_v_tmp.polarAngle,
				CCamera_m_Turn_v_tmp.azimuthalAngle,
				CCamera_m_Turn_v_dis
			);
		}
		if(CCamera.CCamera_p_FocusPosWithDis==null){
			//console.log(CCamera_m_Turn_v_tmp,CCamera_m_Turn_v_dis);
			var CCamera_m_Turn_v_tmp=CCamera.CCamera_m_GetPolarAngleAndAzimuthAngle('mark_manual');
			CCamera.CCamera_m_GridLocationToFocusPos(
				g_camera.position,
				CCamera_m_Turn_v_tmp.polarAngle,
				CCamera_m_Turn_v_tmp.azimuthalAngle,
				CCamera_m_Turn_v_dis
			);
		}
		var CCamera_m_Turn_v_speedRatio=CFunc.CFunc_m_GetSpeedRatio(CCamera.CCamera_p_FocusPosWithDis,CCamera_m_Turn_vp_targetPos);
		CCamera.CCamera_p_FocusPosWithDis.x=CFunc.CFunc_m_Graduation(CCamera_m_Turn_vp_targetPos.x,CCamera.CCamera_p_FocusPosWithDis.x,CCamera_m_Turn_vp_speed*CCamera_m_Turn_v_speedRatio.x);
		CCamera.CCamera_p_FocusPosWithDis.y=CFunc.CFunc_m_Graduation(CCamera_m_Turn_vp_targetPos.y,CCamera.CCamera_p_FocusPosWithDis.y,CCamera_m_Turn_vp_speed*CCamera_m_Turn_v_speedRatio.y);
		CCamera.CCamera_p_FocusPosWithDis.z=CFunc.CFunc_m_Graduation(CCamera_m_Turn_vp_targetPos.z,CCamera.CCamera_p_FocusPosWithDis.z,CCamera_m_Turn_vp_speed*CCamera_m_Turn_v_speedRatio.z);
		if(	CCamera_m_Turn_vp_targetPos.x==CCamera.CCamera_p_FocusPosWithDis.x	&&
			CCamera_m_Turn_vp_targetPos.y==CCamera.CCamera_p_FocusPosWithDis.y	&&
			CCamera_m_Turn_vp_targetPos.z==CCamera.CCamera_p_FocusPosWithDis.z	
		){
			CCamera.CCamera_p_isTurnInit=true;
			CCamera.CCamera_p_FocusPosWithDis=CCamera_m_Turn_vp_targetPos;
			if (typeof CCamera_m_Turn_vp_callback === "function"){
				//turn over
				console.log('camera turn over');
				CCamera_m_Turn_vp_callback(); 
			}
		}
		//CCamera.CCamera_p_camera.lookAt(CCamera.CCamera_p_FocusPosWithDis);
		CCamera.CCamera_p_camera.lookAt({x:CCamera.CCamera_p_FocusPosWithDis.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_FocusPosWithDis.z});
	},
	CCamera_m_GotoDestinationForClick:function(CCamera_m_GotoDestinationForClick_vp_TargetPosition,CCamera_m_GotoDestinationForClick_vp_isForAWalk){

		if(CMouse.CMouse_p_isMouseDown_CameraGotoDestination || CCamera_m_GotoDestinationForClick_vp_isForAWalk){
			CCamera.CCamera_m_SetAction("CCamera_p_action_mark_turn");
			if(CMouse.CMouse_p_isMouseDown_CameraGotoDestination || CCamera_m_GotoDestinationForClick_vp_isForAWalk){
				CMouse.CMouse_p_isMouseDown_CameraGotoDestination=false;
				CCamera.CCamera_p_speedRatio=CFunc.CFunc_m_GetSpeedRatio(CCamera.CCamera_p_camera.position,CCamera_m_GotoDestinationForClick_vp_TargetPosition);
				if(CCamera.CCamera_p_counter==0){
					CCamera.CCamera_p_counter=1;
					//CCamera.CCamera_p_camera.position.y=g_avatarHeight;
					//CCamera.CCamera_p_angleY=CFunc.CFunc_m_GetPointToPointRotation(CCamera.CCamera_p_camera.position.x,CCamera.CCamera_p_camera.position.z,CCamera_m_GotoDestinationForClick_vp_TargetPosition.x,CCamera_m_GotoDestinationForClick_vp_TargetPosition.z);
					//if(new RegExp(/scene1\.html/).test(window.location.pathname)) 
						//CCamera.CCamera_p_isOpenTurnAction=!true;
				}
			}
			CCamera.CCamera_p_targetPosition=CCamera_m_GotoDestinationForClick_vp_TargetPosition;
			
		}
		if(CCamera.CCamera_p_action=='CCamera_p_action_mark_turn'){
			if(CCamera.CCamera_p_isOpenTurnAction){
				CCamera.CCamera_m_Turn(CCamera_m_GotoDestinationForClick_vp_TargetPosition,CCamera.CCamera_p_turnSpeed,function(){
					g_controls.autoRotate=false;
					g_controlsLastAzimuthAngle=g_controls.minAzimuthAngle = g_controls.maxAzimuthAngle = CFunc.CFunc_m_GetPointToPointRotation(CCamera.CCamera_p_camera.position.x,CCamera.CCamera_p_camera.position.z,CCamera.CCamera_p_targetPosition.x,CCamera.CCamera_p_targetPosition.z);
					CCamera.CCamera_m_SetAction("CCamera_p_action_mark_move");
					CCamera.CCamera_p_isOpenTurnAction=false;
				});
			}else{
				CCamera.CCamera_m_SetAction("CCamera_p_action_mark_move");
			}
			
		}
		if(CCamera.CCamera_p_targetPosition!=null && CCamera.CCamera_p_camera!=null){
			if(CCamera.CCamera_p_action=="CCamera_p_action_mark_move"){
				CCamera.CCamera_m_SetAction("CCamera_p_action_mark_move");
				
				var  CCamera_m_GotoDestinationForClick_v_raycaster = new THREE.Raycaster();
				CCamera_m_GotoDestinationForClick_v_raycaster.set(CCamera.CCamera_p_camera.position, new THREE.Vector3(CCamera.CCamera_p_camera.position.x,-100,CCamera.CCamera_p_camera.position.z).normalize() );
				var CCamera_m_GotoDestinationForClick_v_tmp = CCamera_m_GotoDestinationForClick_v_raycaster.intersectObjects( CModel.CModel_p_scene.children );
				var CCamera_m_GotoDestinationForClick_v_index = 0;
				if ( 1<=CCamera_m_GotoDestinationForClick_v_tmp.length ){
					for(var CCamera_m_GotoDestinationForClick_v_i in CCamera_m_GotoDestinationForClick_v_tmp){
						var CCamera_m_GotoDestinationForClick_v_name=CCamera_m_GotoDestinationForClick_v_tmp[CCamera_m_GotoDestinationForClick_v_i].object.name;
						if(	CCamera_m_GotoDestinationForClick_v_name=='mark_ground_1' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_2' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_3' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_4' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_5' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_6' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_bridge' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_stair1' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_stair2' ||
							CCamera_m_GotoDestinationForClick_v_name=='mark_ground_stair3' 
						){
							CCamera.CCamera_p_curGroundName=CCamera_m_GotoDestinationForClick_v_tmp[CCamera_m_GotoDestinationForClick_v_i].object.name;
							CCamera_m_GotoDestinationForClick_v_index=CCamera_m_GotoDestinationForClick_v_i;
							break;
						}
					}
				}
				if(CCamera.CCamera_p_GoRoundsPointSetCurIndex==CCamera.CCamera_p_GoRoundsPointSet.length-1)CCamera.CCamera_p_curGroundName=CCamera.CCamera_p_targetGroundName;
				//if(0==CCamera_m_GotoDestinationForClick_v_tmp.length)console.log(CCamera_m_GotoDestinationForClick_v_tmp.length);
				//if(0<CCamera_m_GotoDestinationForClick_v_tmp.length)console.log(CCamera_m_GotoDestinationForClick_v_tmp[CCamera_m_GotoDestinationForClick_v_index].object.name,CCamera_m_GotoDestinationForClick_v_tmp[CCamera_m_GotoDestinationForClick_v_index].point.y);
				
				var CCamera_m_GotoDestinationForClick_v_LongitudeAndLatitude=CFunc.CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates(CCamera.CCamera_p_camera.position,CCamera.CCamera_p_targetPosition);
				if(CCamera.CCamera_p_moveDistanceDif<Math.abs(CCamera.CCamera_p_targetPosition.x-CCamera.CCamera_p_camera.position.x) ){
					CCamera.CCamera_p_camera.position.x	-=	Math.cos(CCamera_m_GotoDestinationForClick_v_LongitudeAndLatitude.polarAngle-Math.PI/2)*
															Math.sin(CCamera_m_GotoDestinationForClick_v_LongitudeAndLatitude.azimuthalAngle)*
															CCamera.CCamera_p_moveSpeed;
				} 
				if(CCamera.CCamera_p_moveDistanceDif<Math.abs(CCamera.CCamera_p_targetPosition.z-CCamera.CCamera_p_camera.position.z)){
					CCamera.CCamera_p_camera.position.z -= 	Math.cos(CCamera_m_GotoDestinationForClick_v_LongitudeAndLatitude.polarAngle-Math.PI/2)*
															Math.cos(CCamera_m_GotoDestinationForClick_v_LongitudeAndLatitude.azimuthalAngle)*
															CCamera.CCamera_p_moveSpeed;
				}
				if(CCamera.CCamera_p_moveDistanceDif<Math.abs(CCamera.CCamera_p_targetPosition.y-CCamera.CCamera_p_camera.position.y)){
					CCamera.CCamera_p_camera.position.y	+=	Math.sin(CCamera_m_GotoDestinationForClick_v_LongitudeAndLatitude.polarAngle-Math.PI/2)*
															CCamera.CCamera_p_moveSpeed;
				}
				//CCamera.CCamera_p_camera.position.y = CCamera_m_GotoDestinationForClick_v_tmp[CCamera_m_GotoDestinationForClick_v_index].point.y+g_avatarHeight;
				g_helper2.position.copy({x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y-g_avatarHeight,z:CCamera.CCamera_p_camera.position.z});
				g_helper3.position.copy(g_helper2.position);
				//if(CCamera.CCamera_p_turnOnAcceleration && CCamera.CCamera_p_moveSpeed<=0.02)CCamera.CCamera_p_moveSpeed+=0.001;
				
				var CCamera_m_GotoDestinationForClick_v_dis = CFunc.CFunc_m_GetPointToPointDistance(g_helper.position.x,g_helper.position.z,CCamera.CCamera_p_camera.position.x,CCamera.CCamera_p_camera.position.z);
				
				CCamera.CCamera_p_camera.lookAt({x:CCamera.CCamera_p_targetPosition.x,y:CCamera.CCamera_p_camera.position.y,z:CCamera.CCamera_p_targetPosition.z});
			}
		}	
		//console.log(CCamera.CCamera_p_action,CCamera.CCamera_p_GoRoundsPointSetCurIndex);
	},
	CCamera_m_GoRounds:function(CCamera_m_GoRounds_vp_loopMode,CCamera_m_GoRounds_v_callback){//CCamera_m_GoRounds_vp_loopMode	0:repeat,1:once
		if(	CCamera.CCamera_p_camera!=null && 
			(CCamera.CCamera_p_action=="CCamera_p_action_mark_loading" || CCamera.CCamera_p_action=="CCamera_p_action_mark_stand")
		){
			if(CCamera.CCamera_p_GoRoundsPointSetCurIndex>=CCamera.CCamera_p_GoRoundsPointSet.length){
				CCamera.CCamera_p_GoRoundsCounter+=1;
				var CCamera_m_GoRounds_v_cmd
				if (typeof CCamera_m_GoRounds_v_callback === "function"){
					CCamera_m_GoRounds_v_cmd = CCamera_m_GoRounds_v_callback(CCamera.CCamera_p_GoRoundsCounter); 
				}
				if(CCamera_m_GoRounds_vp_loopMode==1)	CCamera_m_GoRounds_v_cmd='mark_stop';
				if(CCamera_m_GoRounds_vp_loopMode==0)	CCamera.CCamera_p_GoRoundsPointSetCurIndex=0;
				if(CCamera_m_GoRounds_v_cmd=='mark_stop') {
					CCamera.CCamera_p_isGoRoundsRunning=false;
					return false;
				}
			}
			CCamera.CCamera_p_targetPosition=CCamera.CCamera_p_GoRoundsPointSet[CCamera.CCamera_p_GoRoundsPointSetCurIndex];
		}		
		if(CCamera.CCamera_p_isGoRoundsRunning && CCamera.CCamera_p_camera!=null && CCamera.CCamera_p_targetPosition){
			CCamera.CCamera_m_GotoDestinationForClick(CCamera.CCamera_p_targetPosition,true);
		}	
		return CCamera.CCamera_p_GoRoundsCounter;
	},
	CCamera_m_CheckEnterArea:function(CCamera_m_CheckEnterArea_vp_TargetSet){
		for(var CCamera_m_CheckEnterArea_v_i in CCamera_m_CheckEnterArea_vp_TargetSet){
			var CCamera_m_CheckEnterArea_v_target = CCamera_m_CheckEnterArea_vp_TargetSet[CCamera_m_CheckEnterArea_v_i];
			var CCamera_m_CheckEnterArea_v_targetPos = CCamera_m_CheckEnterArea_v_target.position;
			var CCamera_m_CheckEnterArea_v_camPos = CCamera.CCamera_p_camera.position;
			if(	CCamera_m_CheckEnterArea_v_target!=null &&
				// Math.pow((CCamera_m_CheckEnterArea_v_targetPos.y-CCamera_m_CheckEnterArea_v_camPos.y),2)+Math.pow((CCamera_m_CheckEnterArea_v_targetPos.z-CCamera_m_CheckEnterArea_v_camPos.z),2)<=Math.pow(CCamera.CCamera_p_targetDis,2) &&
				// Math.pow((CCamera_m_CheckEnterArea_v_targetPos.x-CCamera_m_CheckEnterArea_v_camPos.x),2)+Math.pow((CCamera_m_CheckEnterArea_v_targetPos.y-CCamera_m_CheckEnterArea_v_camPos.y),2)<=Math.pow(CCamera.CCamera_p_targetDis,2) &&
				Math.pow((CCamera_m_CheckEnterArea_v_targetPos.x-CCamera_m_CheckEnterArea_v_camPos.x),2)+Math.pow((CCamera_m_CheckEnterArea_v_targetPos.z-CCamera_m_CheckEnterArea_v_camPos.z),2)<=Math.pow(CCamera.CCamera_p_targetDis,2)
			){
				if(CCamera.CCamera_p_action=="CCamera_p_action_mark_move"){
					CCamera.CCamera_m_SetAction("CCamera_p_action_mark_stand");	
					
					g_helper2.position.copy({x:CCamera.CCamera_p_camera.position.x,y:CCamera.CCamera_p_camera.position.y-g_avatarHeight,z:CCamera.CCamera_p_camera.position.z});
					g_helper3.position.copy(g_helper2.position);
					
					CCamera.CCamera_p_counter=0;
					CMouse.CMouse_p_isMouseDown_OrbitControls=false;
					
					g_INTERSECTED=null;
					if(	(CCamera.CCamera_p_moveMode=='mark_auto' ||	CCamera.CCamera_p_moveMode=='mark_auto2' || CCamera.CCamera_p_moveMode=='mark_auto3') && 
						0<CCamera.CCamera_p_GoRoundsPointSet.length
					)
						CCamera.CCamera_p_GoRoundsPointSetCurIndex+=1;
					
					if(CCamera.CCamera_p_isOpenTurnAction){
						CCamera.CCamera_p_isOpenTurnAction=false;
						
						g_controls.enablePan = true; 
						g_controls.userPanSpeed = 1;
						g_controls.enabled=true;
						g_controls.autoRotate=true;
						g_controls.autoRotateSpeed=-1.7;
						g_controls.target.copy(CCamera.CCamera_p_camera.position);
						var CCamera_m_CheckEnterArea_v_tmp=CFunc.CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates(g_camera.position,CCamera.CCamera_p_FocusPosWithDis);
						g_controlsLastPolarAngle=g_controls.minPolarAngle = g_controls.maxPolarAngle = CCamera_m_CheckEnterArea_v_tmp.polarAngle;
						g_controlsLastAzimuthAngle=g_controls.minAzimuthAngle = g_controls.maxAzimuthAngle = CCamera_m_CheckEnterArea_v_tmp.azimuthalAngle;
						g_controls.update();
					}else{
						g_once=true;
					}
					//console.log('CheckEnterArea');
					break;
				}
			}
		}
	},
	CCamera_m_CreateCrosshair:function(){
		var CCamera_m_CreateCrosshair_v_hot_spot_mesh = new THREE.Mesh(
				new THREE.CircleGeometry( 0.05,32 ),
				new THREE.MeshBasicMaterial({

					map: new THREE.TextureLoader().load( "../../image/cursor.png" ),
					transparent: true,
					opacity: 1
				}));
		CCamera_m_CreateCrosshair_v_hot_spot_mesh.position.copy(CCamera.CCamera_m_GetFront(g_camera,-1));
		
		g_camera.add(CCamera_m_CreateCrosshair_v_hot_spot_mesh);
		return CCamera_m_CreateCrosshair_v_hot_spot_mesh;
	},
	CCamera_m_GetFront:function(CCamera_m_GetFront_vp_obj, CCamera_m_GetFront_vp_distance){
		CCamera_m_GetFront_vp_distance = CCamera_m_GetFront_vp_distance || -1;
		var CCamera_m_GetFront_v_matrix = new THREE.Matrix4();
		CCamera_m_GetFront_v_matrix.extractRotation(CCamera_m_GetFront_vp_obj.matrix);

		var CCamera_m_GetFront_v_direction = new THREE.Vector3(0, 0, CCamera_m_GetFront_vp_distance);
		CCamera_m_GetFront_v_direction.applyMatrix4(CCamera_m_GetFront_v_matrix);
		return CCamera_m_GetFront_v_direction;
	},
	CCamera_m_GridLocationToFocusPos:function(CCamera_m_GridLocationToFocusPos_vp_CameraPos,CCamera_m_GridLocationToFocusPos_vp_polarAngle,CCamera_m_GridLocationToFocusPos_vp_azimuthAngle,CCamera_m_GridLocationToFocusPos_vp_radius){
		CCamera.CCamera_p_FocusPosWithDis=CFunc.CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude(CCamera_m_GridLocationToFocusPos_vp_CameraPos,CCamera_m_GridLocationToFocusPos_vp_polarAngle,CCamera_m_GridLocationToFocusPos_vp_azimuthAngle,CCamera_m_GridLocationToFocusPos_vp_radius);
	},
	CCamera_m_GetPolarAngleAndAzimuthAngle:function(CCamera_m_GetPolarAngleAndAzimuthAngle_vp_mode){//CCamera_m_GetPolarAngleAndAzimuthAngle_vp_mode	null:auto detect, <CCamera_p_moveMode>
		var CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp={};
		var CCamera_m_GetPolarAngleAndAzimuthAngle_v_cameraMoveMode=CCamera.CCamera_p_moveMode;
		if(CCamera_m_GetPolarAngleAndAzimuthAngle_vp_mode!=null)	CCamera_m_GetPolarAngleAndAzimuthAngle_v_cameraMoveMode=CCamera_m_GetPolarAngleAndAzimuthAngle_vp_mode;
		if(CCamera.CCamera_p_FocusPosWithDis==null){
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp.polarAngle=g_controls.getPolarAngle();
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp.azimuthalAngle=g_controls.getAzimuthalAngle();
		}else
		if( CCamera_m_GetPolarAngleAndAzimuthAngle_v_cameraMoveMode=='mark_auto' ||	
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_cameraMoveMode=='mark_auto2' || 
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_cameraMoveMode=='mark_auto3'
		){
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp=CFunc.CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates(g_camera.position,CCamera.CCamera_p_FocusPosWithDis);
		}else
		if(CCamera_m_GetPolarAngleAndAzimuthAngle_v_cameraMoveMode=='mark_manual->auto'){
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp.polarAngle=g_controls.getPolarAngle();
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp.azimuthalAngle=g_controls.getAzimuthalAngle();
		}else
		if(CCamera_m_GetPolarAngleAndAzimuthAngle_v_cameraMoveMode=='mark_manual'){
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp.polarAngle=g_controls.getPolarAngle();
			CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp.azimuthalAngle=g_controls.getAzimuthalAngle();
		}
		
		return CCamera_m_GetPolarAngleAndAzimuthAngle_v_tmp;
	}
};
