    $(function() {
        $('.action-destroy').on('click', function() {
            $.iconpicker.batch('.icp.iconpicker-element', 'destroy');
        });
        // Live binding of buttons
        $(document).on('click', '.action-placement', function(e) {
            $('.action-placement').removeClass('active');
            $(this).addClass('active');
            $('.icp-opts').data('iconpicker').updatePlacement($(this).text());
            e.preventDefault();
            return false;
        });
        $('.action-create').on('click', function() {
            $('.icp-auto').iconpicker();

            $('.icp-dd').iconpicker({
                //title: 'Dropdown with picker',
                //component:'.btn > i'
            });

            $('.icp-glyphs').iconpicker({
                title: 'Prepending glypghicons',
                icons: $.merge(['glyphicon-home', 'glyphicon-repeat', 'glyphicon-search',
                    'glyphicon-arrow-left', 'glyphicon-arrow-right', 'glyphicon-star'], $.iconpicker.defaultOptions.icons),
                fullClassFormatter: function(val){
                    if(val.match(/^fa-/)){
                        return 'fa '+val;
                    }else{
                        return 'glyphicon '+val;
                    }
                }
            });
            $('.icp-opts').iconpicker({
                title: 'With custom options',
                icons: ['fa-github', 'fa-heart', 'fa-html5', 'fa-css3'],
                selectedCustomClass: 'label label-success',
                mustAccept: true,
                placement: 'bottomRight',
                showFooter: true,
                // note that this is ignored cause we have an accept button:
                hideOnSelect: true,
                templates: {
                    footer: '<div class="popover-footer">' +
                            '<div style="text-align:left; font-size:12px;">Placements: \n\
            <a href="#" class=" action-placement">inline</a>\n\
            <a href="#" class=" action-placement">topLeftCorner</a>\n\
            <a href="#" class=" action-placement">topLeft</a>\n\
            <a href="#" class=" action-placement">top</a>\n\
            <a href="#" class=" action-placement">topRight</a>\n\
            <a href="#" class=" action-placement">topRightCorner</a>\n\
            <a href="#" class=" action-placement">rightTop</a>\n\
            <a href="#" class=" action-placement">right</a>\n\
            <a href="#" class=" action-placement">rightBottom</a>\n\
            <a href="#" class=" action-placement">bottomRightCorner</a>\n\
            <a href="#" class=" active action-placement">bottomRight</a>\n\
            <a href="#" class=" action-placement">bottom</a>\n\
            <a href="#" class=" action-placement">bottomLeft</a>\n\
            <a href="#" class=" action-placement">bottomLeftCorner</a>\n\
            <a href="#" class=" action-placement">leftBottom</a>\n\
            <a href="#" class=" action-placement">left</a>\n\
            <a href="#" class=" action-placement">leftTop</a>\n\
            </div><hr></div>'}
            }).data('iconpicker').show();
        }).trigger('click');


        // Events sample:
        // This event is only triggered when the actual input value is changed
        // by user interaction
        $('.icp').on('iconpickerSelected', function(e) {
            $('.lead .picker-target').get(0).className = 'picker-target fa-3x ' +
                    e.iconpickerInstance.options.iconBaseClass + ' ' +
                    e.iconpickerInstance.options.fullClassFormatter(e.iconpickerValue);
        });
    });
