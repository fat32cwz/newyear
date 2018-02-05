function Component(options){
    this.dataBindMap = {};
    this.DOM = {};

    //options may be a name of a registerred component
    if(typeof options === 'string'){
        if(Component.lib[options] === undefined){
            throw new Error('component "' + options + '" is not registered');
        }else{
            options = Component.lib[options];
            if(typeof arguments[1] === 'object'){//---new to support extra options for registered component
                options = jQuery.extend({},arguments[1],options);
            }
        }
    }

    var proNames = ['data','status','method'];
    for(var i = 0;i < proNames.length;++i){
        jQuery.extend(this,options[proNames[i]])//---new
    }
    
    this._render = options.render;

    this._rerender = {};
    jQuery.extend(this._rerender,options.rerender);

    this.children = [];

    this.render = function(){
        this._render();
        if(options.tagAttr){
            this.DOM.$root.attr(options.tagAttr);
        }
    };

    this.render();
}

jQuery.extend(Component,{
    lib:{},
    register: function(name,options){
        this.lib[name] = options;
    }
});

jQuery.extend(Component.prototype,{

    append:function(){//---new
        var component;
        var dataBindMap;
        var index = {
            component : 0,
            dataBindMap : 1,
        }

        for(var i = 0;i < arguments.length;i++){
            component = arguments[i];
            dataBindMap = undefined;

            if($.isArray(component)){
                dataBindMap = component[index.dataBindMap];
                component = component[index.component];
            }

            if(component instanceof Component){
                this.children.push(component);
                if(component.DOM.$root){
                    this.DOM.$root.append(component.DOM.$root);
                }

                if(dataBindMap){
                    this.bindData(dataBindMap,component);
                }

            }else if(component instanceof jQuery){
                this.DOM.$root.append(component);
            }else{
                throw new Error('not a Component instance.');
            }
        }
    },

    appendTo:function($context){
        var childSrc;

        if($context instanceof Component){
            childSrc = this;
        }else if($context instanceof jQuery){
            childSrc = this.DOM.$root;
        }else{
            throw new Error('the $context is not a jQuery nor Component instance');
        }

        $context.append(this);
    },

    mount: function(){
        $('body').append(this.DOM.$root);
    },

    bindData: function(dataBindMap,component){
        if(dataBindMap){
            for(key in dataBindMap){
                component[dataBindMap[key]] = this[key];
                this.dataBindMap[key] = this.dataBindMap[key] || [];
                this.dataBindMap[key].push([component,dataBindMap[key]]);
                component.rerender(dataBindMap[key]);
            }
        }
    },

    rerender: function(dataName, value){
        var mappedItem = undefined;
        var componentIndex = 0;
        var dataIndex = 1;

        if(this[dataName] === undefined){
            jQuery.error('no such data:' + dataName);
        }

        if(value !== undefined){ //--new 
            this[dataName] = value;
        }

        if(this._rerender[dataName]){
            this._rerender[dataName].apply(this,[value]);
        }else{
            if((mappedItem = this.dataBindMap[dataName])){
                for(var i = 0;i < mappedItem.length;i++){
                    mappedItem[i][componentIndex].rerender(mappedItem[i][dataIndex],this[dataName]);
                }
            }
        }
    }

});
