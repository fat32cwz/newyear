var CHelper = {
	CHelper_p_helper1:null,
	CHelper_p_helper2:null,
	CHelper_p_helper3:null,
	CHelper_m_Init:function(){
		//room
		CModel.CModel_m_CreateModelByJson('model/mainscene/box.json','mark_room',0,0,0,0,0,0,1);
		
		//var CHelper_m_Init_v_geometry = new THREE.RingGeometry(0.2, 0.3, 30, 1, 0, 6.3);
		var CHelper_m_Init_v_geometry = new THREE.CylinderGeometry( 0.1, 0, 0.2, 32  );
		CHelper_m_Init_v_geometry.translate( 0, 0.1, 0 );
		CHelper.CHelper_p_helper1 = new THREE.Mesh( CHelper_m_Init_v_geometry, new THREE.MeshBasicMaterial({ transparent: true, color: 0x990000, opacity: 1}) );
		//CHelper.CHelper_p_helper1.rotation.x=-Math.PI/2;
		CModel.CModel_p_scene.add( CHelper.CHelper_p_helper1 );
		CHelper.CHelper_p_helper1.position.set(g_targetX,g_targetY,g_targetZ);

		//var CHelper_m_Init_v_geometry = new THREE.CylinderGeometry( 0.2, 0, g_avatarHeight, 3  ); 
		var CHelper_m_Init_v_geometry = new THREE.CylinderGeometry( 0, 0, g_avatarHeight, 1 );
		CHelper_m_Init_v_geometry.translate( 0, g_avatarHeight*3/2, 0 );
		CHelper.CHelper_p_helper2 = new THREE.Mesh( CHelper_m_Init_v_geometry, new THREE.MeshBasicMaterial( { transparent: true, color: 0x00ffff, opacity: 1} ) );
		CModel.CModel_p_scene.add( CHelper.CHelper_p_helper2 );
		CHelper.CHelper_p_helper2.position.set(g_startX,g_startY,g_startZ);
		
		//var CHelper_m_Init_v_geometry = new THREE.CylinderGeometry( 0, 0.2, g_avatarHeight, 3  );
		var CHelper_m_Init_v_geometry = new THREE.CylinderGeometry( 0, 0, g_avatarHeight, 1 );
		CHelper_m_Init_v_geometry.translate( 0, g_avatarHeight/2, 0 );
		CHelper.CHelper_p_helper3 = new THREE.Mesh( CHelper_m_Init_v_geometry, new THREE.MeshBasicMaterial( { transparent: true, color: 0xff00ff, opacity: 1} ) );
		CModel.CModel_p_scene.add( CHelper.CHelper_p_helper3 );
		CHelper.CHelper_p_helper3.position.set(g_startX,g_startY,g_startZ);
	}
};
