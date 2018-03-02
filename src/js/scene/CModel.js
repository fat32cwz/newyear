var CModel = {
	CModel_p_ModelCounter:0,
	CModel_p_ModelTotal:0,
	CModel_p_IsAllLoadingFinish:false,
	CModel_p_scene:new THREE.Scene(),
	CModel_m_CreateModelByJson:function(CModel_m_CreateModelByJson_vp_Json,CModel_m_CreateModelByJson_vp_name,CModel_m_CreateModelByJson_vp_PX,CModel_m_CreateModelByJson_vp_PY,CModel_m_CreateModelByJson_vp_PZ,CModel_m_CreateModelByJson_vp_RX,CModel_m_CreateModelByJson_vp_RY,CModel_m_CreateModelByJson_vp_RZ,CModel_m_CreateModelByJson_vp_p_Scale){
		CModel.CModel_p_ModelTotal+=1;
		var CModel_m_CreateModelByJson_v_model = {
			CModel_m_CreateModelByJson_v_model_p_name:CModel_m_CreateModelByJson_vp_name,
			CModel_m_CreateModelByJson_v_model_p_loader:new THREE.JSONLoader(),
			CModel_m_CreateModelByJson_v_model_p_materials:null,
			CModel_m_CreateModelByJson_v_model_p_mesh:null,
			CModel_m_CreateModelByJson_v_model_p_mixer:new THREE.AnimationMixer( CModel.CModel_p_scene ),
			CModel_m_CreateModelByJson_v_model_p_isPlay:false,
			CModel_m_CreateModelByJson_v_model_p_visible:true,
			CModel_m_CreateModelByJson_v_model_p_clock:new THREE.Clock(),
			CModel_m_CreateModelByJson_v_model_p_color:0xffffff ,
			CModel_m_CreateModelByJson_v_model_p_animationsDur:4,
			CModel_m_CreateModelByJson_v_model_p_angle:0,
			CModel_m_CreateModelByJson_v_model_p_targetPosition:null,
			CModel_m_CreateModelByJson_v_model_p_action:"CModel_m_CreateModelByJson_v_model_p_action_mark_loading",
			CModel_m_CreateModelByJson_v_model_p_moveSpeed:0.05,
			CModel_m_CreateModelByJson_v_model_p_moveDistanceDif:0.02,
			CModel_m_CreateModelByJson_v_model_p_turnAngleDif:0.01,
			CModel_m_CreateModelByJson_v_model_m_GotoDestination:function(	CModel_m_CreateModelByJson_v_model_m_GotoDestination_vp_TargetPosition,//mod 0:turn+walk,1:turn
																			CModel_m_CreateModelByJson_v_model_m_GotoDestination_vp_isForAWalk
			){
				if(CMouse.CMouse_p_isMouseDown_ClickModel || CModel_m_CreateModelByJson_v_model_m_GotoDestination_vp_isForAWalk){
					CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action="CModel_m_CreateModelByJson_v_model_p_action_mark_turn";
					if(CMouse.CMouse_p_isMouseDown_ClickModel)CMouse.CMouse_p_isMouseDown_ClickModel=false;
					

					CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition=CModel_m_CreateModelByJson_v_model_m_GotoDestination_vp_TargetPosition;
					
					
					CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle=Math.abs(Math.atan((CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.x-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x)/(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.z-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z)));
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x<=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.x && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z<= CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.z){
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle;
					}else 
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.x<CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x  && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z<=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.z){
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle=-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle;
					}else 
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.x<CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x  && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.z<CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z){
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle=-(Math.PI-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle);
					}else 
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x<=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.x && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.z<CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z){
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle=Math.PI-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle;
					}
					
				}
				if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition!=null && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh!=null){
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action=="CModel_m_CreateModelByJson_v_model_p_action_mark_turn"){
						if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_turnAngleDif<Math.abs(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y%(Math.PI*2)-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle)){
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action="CModel_m_CreateModelByJson_v_model_p_action_mark_turn";
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mixer.update( CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_clock.getDelta() );
							if(Math.abs(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle)<=Math.PI){
								
								if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y<=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle)	{
									
									CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y+=Math.PI/180;
									
								}else{
									
									CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y-=Math.PI/180;
									
								}
							}else{
								if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y<=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle){
									CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y-=Math.PI/180;
									if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y<=Math.PI)CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y+=Math.PI*2;
									
								}else{
									CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y+=Math.PI/180;
									if(Math.PI<CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y)CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y-=Math.PI*2;
									
								}
							}
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.updateMatrix();
						}else{
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_angle;
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mixer.update( CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_clock.getDelta() );
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.updateMatrix();
							if(CModel_m_CreateModelByJson_v_model_m_GotoDestination_vp_TargetPosition.mod==0){
								CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action="CModel_m_CreateModelByJson_v_model_p_action_mark_move";
							}else
							if(CModel_m_CreateModelByJson_v_model_m_GotoDestination_vp_TargetPosition.mod==1){
								CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action=='CModel_m_CreateModelByJson_v_model_p_action_mark_turn';
								CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_nextAction+=1;
								CMouse.CMouse_p_isMouseDown_ClickModel=true;
								return;
							}
						}
					}
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action=="CModel_m_CreateModelByJson_v_model_p_action_mark_move"){
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action="CModel_m_CreateModelByJson_v_model_p_action_mark_move";
						if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveDistanceDif<Math.abs(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.x-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x) ){
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mixer.update( CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_clock.getDelta() );
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x+=Math.sin(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y)*CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveSpeed;
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.updateMatrix();
						} 
						if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveDistanceDif<Math.abs(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.z-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z)){
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mixer.update( CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_clock.getDelta() );
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z+=Math.cos(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.y)*CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveSpeed;
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.updateMatrix();
						}
						if(	!(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveDistanceDif<Math.abs(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.x-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x)) &&
							!(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveDistanceDif<Math.abs(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition.z-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z))
						){
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action="CModel_m_CreateModelByJson_v_model_p_action_mark_stand";
						}
						//if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveSpeed<=0.01)CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_moveSpeed+=0.001;
					}
					
				}	
			},
			CModel_m_CreateModelByJson_v_model_m_CheckEnterArea:function(CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet){
				for(var CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i in CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet){
					if(	CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet[CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i]!=null && CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet[CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i].CModel_m_CreateModelByJson_v_model_p_mesh!=null &&
						Math.pow((CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet[CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i].CModel_m_CreateModelByJson_v_model_p_mesh.position.x-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.x),2)+Math.pow((CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet[CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i].CModel_m_CreateModelByJson_v_model_p_mesh.position.z-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.z),2)<=Math.pow(5,2)){
							CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet[CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i].CModel_m_CreateModelByJson_v_model_p_mixer.update( CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet[CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i].CModel_m_CreateModelByJson_v_model_p_clock.getDelta() );
							CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_vp_TargetSet[CModel_m_CreateModelByJson_v_model_m_CheckEnterArea_v_i].CModel_m_CreateModelByJson_v_model_p_mesh.updateMatrix();
							
					}
				}
			},
			CModel_m_CreateModelByJson_v_model_m_GoRounds:function(){//0:repeat,1:once
				CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet[CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex];
				if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh!=null && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition){
					CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_m_GotoDestination(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_targetPosition,true);
				}	
				if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh!=null && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action=="CModel_m_CreateModelByJson_v_model_p_action_mark_stand"){
					CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex+=1;
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex>=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSet.length)	
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_GoRoundsPointSetCurIndex=0;
				}		
			},
			CModel_m_CreateModelByJson_v_model_p_lastKeyframe:0,
			CModel_m_CreateModelByJson_v_model_p_currentKeyframe:0,
			CModel_m_CreateModelByJson_v_model_p_loopTimes:0,
			CModel_m_CreateModelByJson_v_model_p_isloopEnd:true,
			CModel_m_CreateModelByJson_v_model_p_intMillisecond:null,
			CModel_m_CreateModelByJson_v_model_p_nextAction:0,
			CModel_m_CreateModelByJson_v_model_m_PlayAnimation:function(
				CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_keyframes,
				CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_animOffset,
				CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_fps,
				CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_loopingMode//0:repeat,1:once
			){
				var CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh;
				if( CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android ) // exists / is loaded 
				{
					// Alternate morph targets
					var CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_duration=(CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_keyframes-CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_animOffset)/CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_fps*1000;
					var CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_interpolation=CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_duration / (CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_keyframes-CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_animOffset);
					if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_loopTimes==0 && CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_intMillisecond==null)	CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_intMillisecond=new Date().getTime();
					var CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_time = (new Date().getTime()-CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_intMillisecond) % CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_duration;
					var CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe = Math.floor( CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_time / CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_interpolation ) + CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_animOffset;
					if(CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe != CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_currentKeyframe ) {
						CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android.morphTargetInfluences[ CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_lastKeyframe ] = 0;
						CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android.morphTargetInfluences[ CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_currentKeyframe ] = 1;
						CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android.morphTargetInfluences[ CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe ] = 0;
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_lastKeyframe = CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_currentKeyframe;
						CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_currentKeyframe = CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe;
					}
					CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android.morphTargetInfluences[ CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe ] = ( CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_time % CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_interpolation ) / CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_interpolation;
					CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android.morphTargetInfluences[ CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_lastKeyframe ] = 1 - CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_android.morphTargetInfluences[ CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe ];
					//console.clear();
					//console.log('CModel_m_CreateModelByJson_v_model_p_lastKeyframe:'+CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_lastKeyframe+','+'CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe:'+CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe+','+'CModel_m_CreateModelByJson_v_model_p_currentKeyframe:'+CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_currentKeyframe+','+(CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe==CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_keyframes-1));
					if(CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe==CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_keyframes-1){
						if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_isloopEnd){
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_isloopEnd=false;
							CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_loopTimes+=1;
							//console.log(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_loopTimes);
							
							if(CModel_m_CreateModelByJson_v_model_m_PlayAnimation_vp_loopingMode==1 && 1<=CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_loopTimes){
								//CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_loopTimes=0;
								//CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_intMillisecond=null;
								CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_nextAction+=1;
								//if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_nextAction==2) CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_nextAction=0;
								//CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_isloopEnd=true;
								
								g_INTERSECTED=null;
								return;
							}
						}
					}
					if(CModel_m_CreateModelByJson_v_model_m_PlayAnimation_v_keyframe==0)	CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_isloopEnd=true;
					
				}	
			}
		};
		CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_loader.load( CModel_m_CreateModelByJson_vp_Json, function ( CModel_m_CreateModelByJson_v_model_p_loader_vp_geometry, CModel_m_CreateModelByJson_v_model_p_loader_vp_materials ) {
			if(CModel_m_CreateModelByJson_v_model.materials==null){
				CModel_m_CreateModelByJson_v_model.materials = CModel_m_CreateModelByJson_v_model_p_loader_vp_materials;
			}
			for(var CModel_m_CreateModelByJson_v_model_p_loader_v_i in CModel_m_CreateModelByJson_v_model.materials){
				if(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_isPlay) CModel_m_CreateModelByJson_v_model.materials[CModel_m_CreateModelByJson_v_model_p_loader_v_i].morphTargets = true;
			}
			CModel_m_CreateModelByJson_v_model.materials[0].color.setHex(CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_color);
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh = new THREE.Mesh( CModel_m_CreateModelByJson_v_model_p_loader_vp_geometry, CModel_m_CreateModelByJson_v_model.materials );
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.position.set( CModel_m_CreateModelByJson_vp_PX, CModel_m_CreateModelByJson_vp_PY, CModel_m_CreateModelByJson_vp_PZ );
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.rotation.set( CModel_m_CreateModelByJson_vp_RX, CModel_m_CreateModelByJson_vp_RY, CModel_m_CreateModelByJson_vp_RZ );
			var CModel_m_CreateModelByJson_v_model_p_loader_v_s = CModel_m_CreateModelByJson_vp_p_Scale;
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.scale.set( CModel_m_CreateModelByJson_v_model_p_loader_v_s, CModel_m_CreateModelByJson_v_model_p_loader_v_s, CModel_m_CreateModelByJson_v_model_p_loader_v_s );
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.matrixAutoUpdate = true;
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.updateMatrix();
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.visible = CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_visible;
			CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh.name=CModel_m_CreateModelByJson_vp_name;
			
			CModel.CModel_p_scene.add( CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh );
			if(CModel_m_CreateModelByJson_v_model_p_loader_vp_geometry.animations!=null){
				var CModel_m_CreateModelByJson_v_model_p_loader_v_animationClip=CModel_m_CreateModelByJson_v_model_p_loader_vp_geometry.animations[ 0 ];
				
				CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mixer.clipAction( CModel_m_CreateModelByJson_v_model_p_loader_v_animationClip, CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_mesh )
						.setDuration( CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_animationsDur )			// one second
						//.play();	
				CModel_m_CreateModelByJson_v_model.CModel_m_CreateModelByJson_v_model_p_action="CModel_m_CreateModelByJson_v_model_p_action_mark_stand";
			}
			CModel.CModel_m_IsAllLoadingFinish();
		});
		
		return CModel_m_CreateModelByJson_v_model;
	},
	CModel_m_CreateSky:function(CModel_m_CreateSky_vp_Img){
		CModel.CModel_p_ModelTotal+=1;
		var CModel_m_CreateSky_v_model = {
			CModel_m_CreateSky_v_model_p_name:"mark_sky",
			CModel_m_CreateSky_v_model_p_mesh:null
		}
		var CModel_m_CreateSky_v_map = THREE.ImageUtils.loadTexture( CModel_m_CreateSky_vp_Img );
		CModel_m_CreateSky_v_map.flipY = false;
		var CModel_m_CreateSky_v_skyGeo = new THREE.SphereGeometry( 600, 32, 32, 0, Math.PI*2, 0, Math.PI*2);
		CModel_m_CreateSky_v_model.CModel_m_CreateSky_v_model_p_mesh = new THREE.Mesh( CModel_m_CreateSky_v_skyGeo, new THREE.MeshBasicMaterial( { color: 0xffffff , side: THREE.BackSide,  map: CModel_m_CreateSky_v_map} ) );
		CModel_m_CreateSky_v_model.CModel_m_CreateSky_v_model_p_mesh.name="mark_sky"
		CModel_m_CreateSky_v_model.CModel_m_CreateSky_v_model_p_mesh.position.set(0,g_avatarHeight,5);
		CModel.CModel_p_scene.add( CModel_m_CreateSky_v_model.CModel_m_CreateSky_v_model_p_mesh );
		CModel.CModel_m_IsAllLoadingFinish();
		
		return CModel_m_CreateSky_v_model;
	},
	CModel_m_CreatGround:function(CModel_m_CreatGround_vp_Img){
		CModel.CModel_p_ModelTotal+=1;
		var CModel_m_CreatGround_v_geometry2 = new THREE.PlaneGeometry( 100, 100, 1, 1 );
		var CModel_m_CreatGround_v_texture = new THREE.TextureLoader().load( CModel_m_CreatGround_vp_Img );
		CModel_m_CreatGround_v_texture.wrapS = THREE.RepeatWrapping;
		CModel_m_CreatGround_v_texture.wrapT = THREE.RepeatWrapping;
		CModel_m_CreatGround_v_texture.repeat.set( 4, 4 );
		var CModel_m_CreatGround_v_material2 = new THREE.MeshBasicMaterial( { color: 0xffffff,map : CModel_m_CreatGround_v_texture} );
		var CModel_m_CreatGround_v_model={};
		CModel_m_CreatGround_v_model.CModel_m_CreatGround_v_model_p_mesh = new THREE.Mesh( CModel_m_CreatGround_v_geometry2, CModel_m_CreatGround_v_material2 );
		CModel_m_CreatGround_v_model.name="mark_ground";
		CModel_m_CreatGround_v_model.CModel_m_CreatGround_v_model_p_mesh.name="mark_ground";
		CModel_m_CreatGround_v_model.CModel_m_CreatGround_v_model_p_mesh.position.set(0,0,0);
		CModel_m_CreatGround_v_model.CModel_m_CreatGround_v_model_p_mesh.rotation.x=-Math.PI/2;
		CModel_m_CreatGround_v_model.CModel_m_CreatGround_v_model_p_mesh.receiveShadow = true;
		CModel.CModel_p_scene.add( CModel_m_CreatGround_v_model.CModel_m_CreatGround_v_model_p_mesh );
		CModel.CModel_m_IsAllLoadingFinish();
		
		return CModel_m_CreatGround_v_model;
	},
	CModel_p_HotSpot:{
		CModel_p_HotSpot_p_HotSpotList:[],
		CModel_p_HotSpot_p_material:null,
		CModel_p_HotSpot_m_CreateHotSpotByImage:function(CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Name,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Parent,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Img,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_PX,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_PY,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_PZ,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Radius){
			CModel.CModel_p_ModelTotal+=1;
			var CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot_mat = new THREE.MeshBasicMaterial({
				color: 0xffffff,
				side: THREE.DoubleSide,
				map: new THREE.TextureLoader().load( CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Img ),
				transparent: true,
				opacity: 1
			});
			var CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot = new THREE.Mesh( new THREE.CircleGeometry( CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Radius,32 ),CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot_mat);
			CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot.name = CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Name;
			CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot.position.set(CModel_p_HotSpot_m_CreateHotSpotByImage_vp_PX,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_PY,CModel_p_HotSpot_m_CreateHotSpotByImage_vp_PZ);
			CModel.CModel_p_HotSpot.CModel_p_HotSpot_p_material=CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot_mat;

			CModel_p_HotSpot_m_CreateHotSpotByImage_vp_Parent.add(CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot);
			CModel.CModel_p_HotSpot.CModel_p_HotSpot_p_HotSpotList.push(CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot);
			CModel.CModel_m_IsAllLoadingFinish();
			
			return CModel_p_HotSpot_m_CreateHotSpotByImage_v_hotspot;
		},
		CModel_p_HotSpot_p_hotspot_marker_opacity_timer:0,
		CModel_p_HotSpot_m_UpdateHotspot:function(CModel_p_HotSpot_m_UpdateHotspot_vp_g_delta_time){
			CModel.CModel_p_HotSpot.CModel_p_HotSpot_p_hotspot_marker_opacity_timer += CModel_p_HotSpot_m_UpdateHotspot_vp_g_delta_time;
			for(var CModel_p_HotSpot_m_UpdateHotspot_v_i in CModel.CModel_p_HotSpot.CModel_p_HotSpot_p_HotSpotList){
				CModel.CModel_p_HotSpot.CModel_p_HotSpot_p_HotSpotList[CModel_p_HotSpot_m_UpdateHotspot_v_i].lookAt(CCamera.CCamera_p_camera.position);

				/* var CModel_p_HotSpot_m_UpdateHotspot_v_breathing_time = 1;
				var CModel_p_HotSpot_m_UpdateHotspot_v_opa = ((CModel.CModel_p_HotSpot.CModel_p_HotSpot_p_hotspot_marker_opacity_timer + 1) % (CModel_p_HotSpot_m_UpdateHotspot_v_breathing_time * 2)) - CModel_p_HotSpot_m_UpdateHotspot_v_breathing_time;
				CModel_p_HotSpot_m_UpdateHotspot_v_opa = Math.abs(CModel_p_HotSpot_m_UpdateHotspot_v_opa);
				CModel.CModel_p_HotSpot.CModel_p_HotSpot_p_HotSpotList[CModel_p_HotSpot_m_UpdateHotspot_v_i].material.opacity = CModel_p_HotSpot_m_UpdateHotspot_v_opa; */
			}
		}	
	},
	CModel_m_IsAllLoadingFinish:function(){
		CModel.CModel_p_ModelCounter+=1;
		if(CModel.CModel_p_ModelCounter==CModel.CModel_p_ModelTotal){
			//alert('FinishLoading');
			CModel.CModel_p_IsAllLoadingFinish=true;
		}
	}
};
