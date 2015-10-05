// Auto generated by Testing Dashboard
// File        : scripts/Draw/Text/Tests/Text01.js
// Timestamp   : 2015-10-05 16:34:35
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function Text01() {
    TdbTest.call(this, 'scripts/Draw/Text/Tests/Text01.js');
}

Text01.prototype = new TdbTest();

Text01.prototype.test00 = function() {
    qDebug('running Text01.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Text/Tests/data/text01.dxf');
    this.selectAll();
    this.triggerCommand('explode');
    this.deselectAll();
    this.verifyDrawing('Text01_000.dxf');
    this.tearDown();
    qDebug('finished Text01.test00()');
};

