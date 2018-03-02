var CWin = {
	CWin_p_windowWidth:0, 
	CWin_p_windowHeight:0,
	CWin_m_Init:function(){
		g_container.addEventListener( 'resize', CWin.CWin_m_onWindowResize, false );
	},
	CWin_m_onWindowResize:function ( event ) {

		
		if ( CWin.CWin_p_windowWidth != window.innerWidth || CWin.CWin_p_windowHeight != window.innerHeight ) {

			CWin.CWin_p_windowWidth  = window.innerWidth;
			CWin.CWin_p_windowHeight = window.innerHeight;

			g_renderer.setSize ( CWin.CWin_p_windowWidth, CWin.CWin_p_windowHeight );
			
		}
		
	}
};

