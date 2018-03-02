var CMouse = {
	CMouse_p_mouse:new THREE.Vector2(),
	CMouse_p_status:null,
	CMouse_p_isMouseDown_CameraGotoDestination:false,
	CMouse_p_isMouseDown_ClickModel:true,
	CMouse_p_isMouseDown_OrbitControls:false,
	CMouse_p_isMouseDown_DeviceOrientationControls_startX:null,
	CMouse_p_isMouseUp_DeviceOrientationControls_startX:null,
	CMouse_p_counter:0,
	CMouse_m_Init:function(){
		if(navigator.platform=="Win32"){
			g_container.addEventListener( 'mousedown', CMouse.CMouse_m_onMouseDown, false );
			g_container.addEventListener( 'mousemove', CMouse.CMouse_m_onMouseMove, false );
			g_container.addEventListener( 'mouseup', CMouse.CMouse_m_onMouseUp, false );
		}else{
			g_container.addEventListener('touchstart', CMouse.CMouse_m_onMouseDown, false); 
			g_container.addEventListener('touchmove', CMouse.CMouse_m_onMouseMove, false); 
			g_container.addEventListener('touchend', CMouse.CMouse_m_onMouseUp, false);
		}
		
		/* $("#trace1").mouseup(function() {
			
		});
		$("#trace2").mouseup(function() {
			
		});		 */
	},

	CMouse_m_onMouseDown:function ( event ) {
		g_isFirstClick=false;
		g_autoRotate=false;
		g_controls.autoRotate=false;
		if(CCamera.CCamera_p_action=="CCamera_p_action_mark_move" || CCamera.CCamera_p_action=="CCamera_p_action_mark_loading") return;
		CMouse.CMouse_p_status="CMouse_p_status_mark_down";
		
			CMouse.CMouse_p_counter=0;
			CMouse.CMouse_p_isMouseDown_OrbitControls=true;
			
	},
	CMouse_m_onMouseMove:function ( event ) {
		CMouse.CMouse_p_status="CMouse_p_status_mark_move";
		if(CCamera.CCamera_p_action!="CCamera_p_action_mark_move"  && CMouse.CMouse_p_isMouseDown_OrbitControls ){
			CMouse.CMouse_p_counter+=1;
			

			if(CMouse.CMouse_p_counter==1){
				CCamera.CCamera_m_Init();
				
			}else
			if(CMouse.CMouse_p_counter==2){
				CMouse.CMouse_p_isMouseDown_OrbitControls=false;
				g_controls.minPolarAngle = 0;
				g_controls.maxPolarAngle = Math.PI;		
				g_controls.minAzimuthAngle = -Infinity;
				g_controls.maxAzimuthAngle = Infinity;	
				
			}
		}else{
			
		}
	},
	CMouse_m_onMouseUp:function ( event ) {
		if(CCamera.CCamera_p_amination!=null) return;
		if(CCamera.CCamera_p_action=="CCamera_p_action_mark_move") return;
		if(CMouse.CMouse_p_status=="CMouse_p_status_mark_down"){
			CMouse.CMouse_p_mouse.x = ( (event.clientX==null?event.changedTouches[0].clientX:event.clientX) / g_renderer.domElement.clientWidth/ CView.CView_p_CView[0].CView_p_CView_p_width ) * 2 - 1;
			CMouse.CMouse_p_mouse.y = - ( (event.clientY==null?event.changedTouches[0].clientY:event.clientY) / g_renderer.domElement.clientHeight/CView.CView_p_CView[0].CView_p_CView_p_height ) * 2 + 1;
			g_raycaster.setFromCamera( CMouse.CMouse_p_mouse, CView.CView_p_CView[0].CView_p_CView_p_camera );

			var CMouse_m_onMouseUp_v_intersects = g_raycaster.intersectObjects( CModel.CModel_p_scene.children );

			if ( CMouse_m_onMouseUp_v_intersects.length > 0 ) {
				g_INTERSECTED=CMouse_m_onMouseUp_v_intersects[ 0 ];
				if ( CMouse_m_onMouseUp_v_intersects.length > 1 && CMouse_m_onMouseUp_v_intersects[ 0 ].object.name == 'mark_room') {

				}
				g_helper.position.set( 0, 0, 0 );
				
				//if(g_INTERSECTED.object.name=="mark_ground"){
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
					if(CCamera.CCamera_p_action=="CCamera_p_action_mark_loading" || CCamera.CCamera_p_action=="CCamera_p_action_mark_stand"){
						g_helper.position.copy( g_INTERSECTED.point );
						g_helper.visible=true;
						CCamera.CCamera_p_targetGroundName=g_INTERSECTED.object.name;
					}
				}else{
					g_helper.visible=false;
				}
				
				CMouse.CMouse_p_isMouseDown_CameraGotoDestination=true;
				/* if(g_INTERSECTED.object.name=="mark_Cat"){
					document.getElementById('mark_myAudio').play();
				} */
				
			}
		}
		CMouse.CMouse_p_status="CMouse_p_status_mark_up";
		
	}
};

