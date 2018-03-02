var CFunc = {
	/* CFunc_m_RandomFloat:function(CFunc_m_RandomFloat_vp_min,CFunc_m_RandomFloat_vp_max){
		var CFunc_m_RandomFloat_v_Range = CFunc_m_RandomFloat_vp_max - CFunc_m_RandomFloat_vp_min;
		var CFunc_m_RandomFloat_v_Rand = Math.random();
		var CFunc_m_RandomFloat_v_num = CFunc_m_RandomFloat_vp_min + CFunc_m_RandomFloat_v_Rand * CFunc_m_RandomFloat_v_Range;
		return CFunc_m_RandomFloat_v_num;
	}, */
	/* CFunc_m_Randominteger:function(CFunc_m_Randominteger_vp_min,CFunc_m_Randominteger_vp_max){
		var CFunc_m_Randominteger_v_Range = CFunc_m_Randominteger_vp_max - CFunc_m_Randominteger_vp_min;
		var CFunc_m_Randominteger_v_Rand = Math.random();
		var CFunc_m_Randominteger_v_num = CFunc_m_Randominteger_vp_min + Math.round(CFunc_m_Randominteger_v_Rand * CFunc_m_Randominteger_v_Range);
		return CFunc_m_Randominteger_v_num;
	}, */
	/* CFunc_m_GetSign:function(CFunc_m_GetSign_vp_num){
		var CFunc_m_GetSign_v_result=1;
		if(CFunc_m_GetSign_vp_num<0){
			CFunc_m_GetSign_v_result=-1;
		}
		return CFunc_m_GetSign_v_result;
	}, */

	CFunc_m_GetPointToPointDistance:function(CFunc_m_GetPointToPointDistance_vp_x1,CFunc_m_GetPointToPointDistance_vp_y1,CFunc_m_GetPointToPointDistance_vp_x2,CFunc_m_GetPointToPointDistance_vp_y2){
		return Math.pow((Math.pow((CFunc_m_GetPointToPointDistance_vp_x1-CFunc_m_GetPointToPointDistance_vp_x2),2)+Math.pow((CFunc_m_GetPointToPointDistance_vp_y1-CFunc_m_GetPointToPointDistance_vp_y2),2)),0.5);
	},
	CFunc_m_Get3DPointTo3DPointDistance:function(CFunc_m_GetPointToPointDistance_vp_Point1,CFunc_m_GetPointToPointDistance_vp_Point2){
		return 	Math.pow((
						Math.pow((CFunc_m_GetPointToPointDistance_vp_Point1.x-CFunc_m_GetPointToPointDistance_vp_Point2.x),2)+
						Math.pow((CFunc_m_GetPointToPointDistance_vp_Point1.y-CFunc_m_GetPointToPointDistance_vp_Point2.y),2)+
						Math.pow((CFunc_m_GetPointToPointDistance_vp_Point1.z-CFunc_m_GetPointToPointDistance_vp_Point2.z),2)
				),0.5);
	},
	CFunc_m_GetPointToPointRotation:function(CFunc_m_GetPointToPointRotation_vp_x_init,CFunc_m_GetPointToPointRotation_vp_y_init,CFunc_m_GetPointToPointRotation_vp_x_target,CFunc_m_GetPointToPointRotation_vp_y_target){
		var CFunc_m_GetPointToPointRotation_v_angle
		CFunc_m_GetPointToPointRotation_v_angle=Math.abs(Math.atan((CFunc_m_GetPointToPointRotation_vp_x_target-CFunc_m_GetPointToPointRotation_vp_x_init)/(CFunc_m_GetPointToPointRotation_vp_y_target-CFunc_m_GetPointToPointRotation_vp_y_init)));
		if(CFunc_m_GetPointToPointRotation_vp_x_init<=CFunc_m_GetPointToPointRotation_vp_x_target && CFunc_m_GetPointToPointRotation_vp_y_init<= CFunc_m_GetPointToPointRotation_vp_y_target){//rd
			CFunc_m_GetPointToPointRotation_v_angle=-(Math.PI-CFunc_m_GetPointToPointRotation_v_angle);
		}else 
		if(CFunc_m_GetPointToPointRotation_vp_x_target<CFunc_m_GetPointToPointRotation_vp_x_init  && CFunc_m_GetPointToPointRotation_vp_y_init<=CFunc_m_GetPointToPointRotation_vp_y_target){//ld
			CFunc_m_GetPointToPointRotation_v_angle=Math.PI-CFunc_m_GetPointToPointRotation_v_angle;
		}else 
		if(CFunc_m_GetPointToPointRotation_vp_x_target<CFunc_m_GetPointToPointRotation_vp_x_init  && CFunc_m_GetPointToPointRotation_vp_y_target<CFunc_m_GetPointToPointRotation_vp_y_init){//lu
			CFunc_m_GetPointToPointRotation_v_angle=CFunc_m_GetPointToPointRotation_v_angle;
		}else 
		if(CFunc_m_GetPointToPointRotation_vp_x_init<=CFunc_m_GetPointToPointRotation_vp_x_target && CFunc_m_GetPointToPointRotation_vp_y_target<CFunc_m_GetPointToPointRotation_vp_y_init){//rd
			CFunc_m_GetPointToPointRotation_v_angle=-CFunc_m_GetPointToPointRotation_v_angle;
		}
		
		return CFunc_m_GetPointToPointRotation_v_angle;
	},
	/* CFunc_m_GetPointByLinearEquation:function(CFunc_m_GetPointByLinearEquation_vp_x1,CFunc_m_GetPointByLinearEquation_vp_y1,CFunc_m_GetPointByLinearEquation_vp_x2,CFunc_m_GetPointByLinearEquation_vp_y2,CFunc_m_GetPointByLinearEquation_vp_byXRoY,CFunc_m_GetPointByLinearEquation_vp_valXRoY){
		var CFunc_m_GetPointByLinearEquation_v_result;
		var CFunc_m_GetPointByLinearEquation_v_k=(CFunc_m_GetPointByLinearEquation_vp_y1-CFunc_m_GetPointByLinearEquation_vp_y2)/(CFunc_m_GetPointByLinearEquation_vp_x1-CFunc_m_GetPointByLinearEquation_vp_x2);
		var CFunc_m_GetPointByLinearEquation_v_b=(CFunc_m_GetPointByLinearEquation_vp_y1*CFunc_m_GetPointByLinearEquation_vp_x2-CFunc_m_GetPointByLinearEquation_vp_y2*CFunc_m_GetPointByLinearEquation_vp_x1)/(CFunc_m_GetPointByLinearEquation_vp_x2-CFunc_m_GetPointByLinearEquation_vp_x1);
		if(CFunc_m_GetPointByLinearEquation_vp_byXRoY=='x'){
			CFunc_m_GetPointByLinearEquation_v_result=CFunc_m_GetPointByLinearEquation_v_k*CFunc_m_GetPointByLinearEquation_vp_valXRoY+CFunc_m_GetPointByLinearEquation_v_b;
		}
		if(CFunc_m_GetPointByLinearEquation_vp_byXRoY=='y'){
			CFunc_m_GetPointByLinearEquation_v_result=(CFunc_m_GetPointByLinearEquation_vp_valXRoY-CFunc_m_GetPointByLinearEquation_v_b)/CFunc_m_GetPointByLinearEquation_v_k;
		}
		
		return CFunc_m_GetPointByLinearEquation_v_result;
	}, */
	CFunc_m_GetTheNearestPointFromPointSet(CFunc_m_GetTheNearestPointFromPointSet_vp_point,CFunc_m_GetTheNearestPointFromPointSet_vp_pointSet){
		var CFunc_m_GetTheNearestPointFromPointSet_v_NearestPointIndex=0;
		var CFunc_m_GetTheNearestPointFromPointSet_v_lastDis=null;
		var CFunc_m_GetTheNearestPointFromPointSet_v_dis=null;
		for(var CFunc_m_GetTheNearestPointFromPointSet_v_i in CFunc_m_GetTheNearestPointFromPointSet_vp_pointSet){
			CFunc_m_GetTheNearestPointFromPointSet_v_dis=CFunc.CFunc_m_GetPointToPointDistance(CFunc_m_GetTheNearestPointFromPointSet_vp_point.x,CFunc_m_GetTheNearestPointFromPointSet_vp_point.z,CFunc_m_GetTheNearestPointFromPointSet_vp_pointSet[CFunc_m_GetTheNearestPointFromPointSet_v_i].x,CFunc_m_GetTheNearestPointFromPointSet_vp_pointSet[CFunc_m_GetTheNearestPointFromPointSet_v_i].z);
			if(CFunc_m_GetTheNearestPointFromPointSet_v_lastDis==null){
				CFunc_m_GetTheNearestPointFromPointSet_v_lastDis=CFunc_m_GetTheNearestPointFromPointSet_v_dis;
			}else{
				if(CFunc_m_GetTheNearestPointFromPointSet_v_dis<CFunc_m_GetTheNearestPointFromPointSet_v_lastDis){
					CFunc_m_GetTheNearestPointFromPointSet_v_NearestPointIndex=CFunc_m_GetTheNearestPointFromPointSet_v_i;
					CFunc_m_GetTheNearestPointFromPointSet_v_lastDis=CFunc_m_GetTheNearestPointFromPointSet_v_dis;
				}
			}
		}
		
		return Number(CFunc_m_GetTheNearestPointFromPointSet_v_NearestPointIndex);
	},
	CFunc_m_Graduation(CFunc_m_Graduation_vp_targetValue,CFunc_m_Graduation_vp_currentValue,CFunc_m_Graduation_vp_speed){
		var CFunc_m_Graduation_v_currentValue=CFunc_m_Graduation_vp_currentValue;
		if(CFunc_m_Graduation_vp_targetValue<CFunc_m_Graduation_v_currentValue){
			if(	CFunc_m_Graduation_vp_targetValue<=(CFunc_m_Graduation_v_currentValue-CFunc_m_Graduation_vp_speed)	&&
				0.0000000001<CFunc_m_Graduation_vp_speed
			){
				CFunc_m_Graduation_v_currentValue-=CFunc_m_Graduation_vp_speed;
			}
			if(	(CFunc_m_Graduation_v_currentValue-CFunc_m_Graduation_vp_speed)<CFunc_m_Graduation_vp_targetValue	||
				CFunc_m_Graduation_vp_speed<0.0000000001
			){
				CFunc_m_Graduation_v_currentValue=CFunc_m_Graduation_vp_targetValue;
			}
		}
		if(CFunc_m_Graduation_v_currentValue<CFunc_m_Graduation_vp_targetValue){
			if(	(CFunc_m_Graduation_v_currentValue+CFunc_m_Graduation_vp_speed)<=CFunc_m_Graduation_vp_targetValue	&&
				0.0000000001<CFunc_m_Graduation_vp_speed
			){
				CFunc_m_Graduation_v_currentValue+=CFunc_m_Graduation_vp_speed;
			}
			if(	CFunc_m_Graduation_vp_targetValue<(CFunc_m_Graduation_v_currentValue+CFunc_m_Graduation_vp_speed)	||
				CFunc_m_Graduation_vp_speed<0.0000000001
			){
				CFunc_m_Graduation_v_currentValue=CFunc_m_Graduation_vp_targetValue;
			}
		}
		return CFunc_m_Graduation_v_currentValue;
	},
	CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude:function(
			CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_centerPos,
			CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_polarAngle,
			CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_azimuthAngle,
			CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_radius
	){
        var CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_z = CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_centerPos.z,
            CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_x = CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_centerPos.x,
            CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_y = CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_centerPos.y;
    
		var CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_polarAngle=CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_polarAngle;
		var CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_azimuthAngle=CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_azimuthAngle;
		
        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_polarAngle += -Math.PI / 2;
        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_azimuthAngle = -CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_azimuthAngle + -Math.PI / 2;

        var CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_temp = ((CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_polarAngle - Math.PI / 2) % Math.PI === 0?0:Math.cos(CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_polarAngle)) * CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_radius;

        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_z += (CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_azimuthAngle % Math.PI === 0?0:Math.sin(CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_azimuthAngle)) * CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_temp;
        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_x += ((CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_azimuthAngle - Math.PI / 2) % Math.PI === 0?0:Math.cos(CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_azimuthAngle)) * CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_temp;
        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_y += (CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_polarAngle % Math.PI === 0?0:Math.sin(CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_polarAngle)) * CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_vp_radius;
        
        var CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_rtn = {};
        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_rtn.z = CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_z;
        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_rtn.x = CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_x;
        CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_rtn.y = CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_centerPos_y;
        return CFunc_m_GetSphericalCoordinatesByLongitudeAndLatitude_v_rtn;
	},
	CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates:function(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_centerPosition,CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_focus){
        var CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_z = CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_focus.z - CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_centerPosition.z;
            CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_x = CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_focus.x - CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_centerPosition.x;
            CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_y = CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_focus.y - CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_centerPosition.y;

        var CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle = {},
            CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_xy = Math.sqrt(Math.pow(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_z,2) + Math.pow(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_x,2));

        CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle.polarAngle = Math.atan(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_y / CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_xy) + Math.PI / 2;
        /* if(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_x > 0){
            CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle.azimuthalAngle = (Math.atan(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_z/CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_x) + Math.PI * 2) % (Math.PI * 2);
        }else{
            CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle.azimuthalAngle = Math.atan(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_z/CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_x) + Math.PI
        }
        CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle.azimuthalAngle = -CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle.azimuthalAngle - Math.PI / 2; */
		CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle.azimuthalAngle = CFunc.CFunc_m_GetPointToPointRotation(CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_centerPosition.x,CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_centerPosition.z,CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_focus.x,CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_vp_focus.z);

        return CFunc_m_GetLongitudeAndLatitudeBySphericalCoordinates_v_angle;
    },
	CFunc_m_GetSpeedRatio:function(CFunc_m_GetSpeedRatio_vp_sourcePosition,CFunc_m_GetSpeedRatio_vp_targetPosition){
		var CFunc_m_GetSpeedRatio_v_x=Math.abs(CFunc_m_GetSpeedRatio_vp_targetPosition.x-CFunc_m_GetSpeedRatio_vp_sourcePosition.x);
		var CFunc_m_GetSpeedRatio_v_y=Math.abs(CFunc_m_GetSpeedRatio_vp_targetPosition.y-CFunc_m_GetSpeedRatio_vp_sourcePosition.y);
		var CFunc_m_GetSpeedRatio_v_z=Math.abs(CFunc_m_GetSpeedRatio_vp_targetPosition.z-CFunc_m_GetSpeedRatio_vp_sourcePosition.z);
		var CFunc_m_GetSpeedRatio_v_xyz=CFunc_m_GetSpeedRatio_v_x+CFunc_m_GetSpeedRatio_v_y+CFunc_m_GetSpeedRatio_v_z;
		return {x:CFunc_m_GetSpeedRatio_v_x/CFunc_m_GetSpeedRatio_v_xyz,y:CFunc_m_GetSpeedRatio_v_y/CFunc_m_GetSpeedRatio_v_xyz,z:CFunc_m_GetSpeedRatio_v_z/CFunc_m_GetSpeedRatio_v_xyz};
	}
}	
