var CView = {
	CView_p_CView:	[
				{
					CView_p_CView_p_left: 0,
					CView_p_CView_p_top: 0,
					CView_p_CView_p_width: 1.0,
					CView_p_CView_p_height: 1.0,
					CView_p_CView_p_background: new THREE.Color().setRGB( 0.5, 0.5, 0.7 ),
					CView_p_CView_p_eye: [ g_startX, g_avatarHeight, g_startZ ],
					CView_p_CView_p_up: null,
					CView_p_CView_p_fov: 55,//30
					CView_p_CView_m_updateCamera: function ( CView_p_CView_m_updateCamera_vp_camera, CView_p_CView_m_updateCamera_vp_scene, CView_p_CView_m_updateCamera_vp_mouseX, CView_p_CView_m_updateCamera_vp_mouseY ) {
					  
					}
				} 
				/* {
					CView_p_CView_p_left: 0,
					CView_p_CView_p_top: 0,
					CView_p_CView_p_width: 0.75*1,
					CView_p_CView_p_height: 1.0,
					CView_p_CView_p_background: new THREE.Color().setRGB( 0.5, 0.5, 0.7 ),
					CView_p_CView_p_eye: [ g_startX, g_avatarHeight, g_startZ ],
					CView_p_CView_p_up: null,
					CView_p_CView_p_fov: 55,//30
					CView_p_CView_m_updateCamera: function ( CView_p_CView_m_updateCamera_vp_camera, CView_p_CView_m_updateCamera_vp_scene, CView_p_CView_m_updateCamera_vp_mouseX, CView_p_CView_m_updateCamera_vp_mouseY ) {
					  //CView_p_CView_m_updateCamera_vp_camera.position.x += CView_p_CView_m_updateCamera_vp_mouseX * 0.05;
					  //CView_p_CView_m_updateCamera_vp_camera.position.x = Math.max( Math.min( CView_p_CView_m_updateCamera_vp_camera.position.x, 2000 ), -2000 );
					  //CView_p_CView_m_updateCamera_vp_camera.lookAt( CView_p_CView_m_updateCamera_vp_scene.position );
					}
				},
				{
					CView_p_CView_p_left: 0.75*1,
					CView_p_CView_p_top: 0,
					CView_p_CView_p_width: 0.25*1,
					CView_p_CView_p_height: 0.5,
					CView_p_CView_p_background: new THREE.Color().setRGB( 0.7, 0.5, 0.5 ),
					CView_p_CView_p_eye: [ 0, 25, 8 ],
					CView_p_CView_p_up: [ 0, 0, -1 ],
					CView_p_CView_p_fov: 72,
					CView_p_CView_m_updateCamera: function ( CView_p_CView_m_updateCamera_vp_camera, CView_p_CView_m_updateCamera_vp_scene, CView_p_CView_m_updateCamera_vp_mouseX, CView_p_CView_m_updateCamera_vp_mouseY ) {
					  //CView_p_CView_m_updateCamera_vp_camera.position.x -= CView_p_CView_m_updateCamera_vp_mouseX * 0.05;
					  //CView_p_CView_m_updateCamera_vp_camera.position.x = Math.max( Math.min( CView_p_CView_m_updateCamera_vp_camera.position.x, 2000 ), -2000 );
					  CView_p_CView_m_updateCamera_vp_camera.lookAt( CView_p_CView_m_updateCamera_vp_camera.position.clone().setY( 0 ) );
					}
				},
				{
					CView_p_CView_p_left: 0.75*1,
					CView_p_CView_p_top: 0.5,
					CView_p_CView_p_width: 0.25*1,
					CView_p_CView_p_height: 0.5,
					CView_p_CView_p_background: new THREE.Color().setRGB( 0.5, 0.7, 0.7 ),
					CView_p_CView_p_eye: [ 28, g_avatarHeight, 3.5 ],
					CView_p_CView_p_up: [ 0, 1, 0 ],
					CView_p_CView_p_fov: 80,
					CView_p_CView_m_updateCamera: function ( CView_p_CView_m_updateCamera_vp_camera, CView_p_CView_m_updateCamera_vp_scene, CView_p_CView_m_updateCamera_vp_mouseX, CView_p_CView_m_updateCamera_vp_mouseY ) {
					  //CView_p_CView_m_updateCamera_vp_camera.position.y -= CView_p_CView_m_updateCamera_vp_mouseX * 0.05;
					  //CView_p_CView_m_updateCamera_vp_camera.position.y = Math.max( Math.min( CView_p_CView_m_updateCamera_vp_camera.position.y, 1600 ), -1600 );
					  CView_p_CView_m_updateCamera_vp_camera.lookAt( CView_p_CView_m_updateCamera_vp_scene.position );
					}
				} */

			]
	,
	CView_m_Init:function(){
		for (var CView_m_Init_v_ii =  0; CView_m_Init_v_ii < CView.CView_p_CView.length; ++CView_m_Init_v_ii ) {
			var CView_m_Init_v_v = CView.CView_p_CView[CView_m_Init_v_ii];
			var CView_m_Init_v_camera = new THREE.PerspectiveCamera( CView_m_Init_v_v.CView_p_CView_p_fov, window.innerWidth / window.innerHeight, 0.01, 1000 );
			CModel.CModel_p_scene.add( CView_m_Init_v_camera );
			CView_m_Init_v_camera.position.fromArray( CView_m_Init_v_v.CView_p_CView_p_eye );
			if(CView_m_Init_v_v.CView_p_CView_p_up!=null)CView_m_Init_v_camera.up.fromArray( CView_m_Init_v_v.CView_p_CView_p_up );
			CView_m_Init_v_v.CView_p_CView_p_camera = CView_m_Init_v_camera;
		}
	},
	CView_m_update:function(){
		for ( var CView_m_update_v_ii = 0; CView_m_update_v_ii < CView.CView_p_CView.length; ++CView_m_update_v_ii ) {
			var CView_m_update_v_v = CView.CView_p_CView[CView_m_update_v_ii];
			var CView_m_update_v_camera = CView_m_update_v_v.CView_p_CView_p_camera;
			CView_m_update_v_v.CView_p_CView_m_updateCamera( CView_m_update_v_camera, CModel.CModel_p_scene, CMouse.CMouse_p_mouse.x, CMouse.CMouse_p_mouse.y );
			var CView_m_update_v_left   = Math.floor( CWin.CWin_p_windowWidth  * CView_m_update_v_v.CView_p_CView_p_left );
			var CView_m_update_v_top    = Math.floor( CWin.CWin_p_windowHeight * CView_m_update_v_v.CView_p_CView_p_top );
			var CView_m_update_v_width  = Math.floor( CWin.CWin_p_windowWidth  * CView_m_update_v_v.CView_p_CView_p_width );
			var CView_m_update_v_height = Math.floor( CWin.CWin_p_windowHeight * CView_m_update_v_v.CView_p_CView_p_height );
			g_renderer.setViewport( CView_m_update_v_left, CView_m_update_v_top, CView_m_update_v_width, CView_m_update_v_height );
			g_renderer.setScissor( CView_m_update_v_left, CView_m_update_v_top, CView_m_update_v_width, CView_m_update_v_height );
			g_renderer.setScissorTest( true );
			g_renderer.setClearColor( CView_m_update_v_v.CView_p_CView_p_background ,0);
			CView_m_update_v_camera.aspect = CView_m_update_v_width / CView_m_update_v_height;
			CView_m_update_v_camera.updateProjectionMatrix();
			g_renderer.render( CModel.CModel_p_scene, CView_m_update_v_camera );
			
		}
	}
}