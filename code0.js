gdjs.FinCode = {};
gdjs.FinCode.GDPiso32Objects1= [];
gdjs.FinCode.GDPiso32Objects2= [];
gdjs.FinCode.GDPiso32Objects3= [];
gdjs.FinCode.GDPiso3Objects1= [];
gdjs.FinCode.GDPiso3Objects2= [];
gdjs.FinCode.GDPiso3Objects3= [];
gdjs.FinCode.GDNewObject3Objects1= [];
gdjs.FinCode.GDNewObject3Objects2= [];
gdjs.FinCode.GDNewObject3Objects3= [];
gdjs.FinCode.GDNewObjectObjects1= [];
gdjs.FinCode.GDNewObjectObjects2= [];
gdjs.FinCode.GDNewObjectObjects3= [];
gdjs.FinCode.GDProtagonistaObjects1= [];
gdjs.FinCode.GDProtagonistaObjects2= [];
gdjs.FinCode.GDProtagonistaObjects3= [];
gdjs.FinCode.GDBuhoObjects1= [];
gdjs.FinCode.GDBuhoObjects2= [];
gdjs.FinCode.GDBuhoObjects3= [];
gdjs.FinCode.GDPicosObjects1= [];
gdjs.FinCode.GDPicosObjects2= [];
gdjs.FinCode.GDPicosObjects3= [];
gdjs.FinCode.GDPuenteObjects1= [];
gdjs.FinCode.GDPuenteObjects2= [];
gdjs.FinCode.GDPuenteObjects3= [];
gdjs.FinCode.GDChicaObjects1= [];
gdjs.FinCode.GDChicaObjects2= [];
gdjs.FinCode.GDChicaObjects3= [];
gdjs.FinCode.GDEnemigo1Objects1= [];
gdjs.FinCode.GDEnemigo1Objects2= [];
gdjs.FinCode.GDEnemigo1Objects3= [];
gdjs.FinCode.GDB1Objects1= [];
gdjs.FinCode.GDB1Objects2= [];
gdjs.FinCode.GDB1Objects3= [];
gdjs.FinCode.GDBg2Objects1= [];
gdjs.FinCode.GDBg2Objects2= [];
gdjs.FinCode.GDBg2Objects3= [];
gdjs.FinCode.GDBg3Objects1= [];
gdjs.FinCode.GDBg3Objects2= [];
gdjs.FinCode.GDBg3Objects3= [];
gdjs.FinCode.GDBg4Objects1= [];
gdjs.FinCode.GDBg4Objects2= [];
gdjs.FinCode.GDBg4Objects3= [];
gdjs.FinCode.GDBg5Objects1= [];
gdjs.FinCode.GDBg5Objects2= [];
gdjs.FinCode.GDBg5Objects3= [];
gdjs.FinCode.GDBg7Objects1= [];
gdjs.FinCode.GDBg7Objects2= [];
gdjs.FinCode.GDBg7Objects3= [];
gdjs.FinCode.GDBg8Objects1= [];
gdjs.FinCode.GDBg8Objects2= [];
gdjs.FinCode.GDBg8Objects3= [];
gdjs.FinCode.GDCheckpointObjects1= [];
gdjs.FinCode.GDCheckpointObjects2= [];
gdjs.FinCode.GDCheckpointObjects3= [];
gdjs.FinCode.GDBalaObjects1= [];
gdjs.FinCode.GDBalaObjects2= [];
gdjs.FinCode.GDBalaObjects3= [];
gdjs.FinCode.GDEscaleraObjects1= [];
gdjs.FinCode.GDEscaleraObjects2= [];
gdjs.FinCode.GDEscaleraObjects3= [];
gdjs.FinCode.GDBuho1Objects1= [];
gdjs.FinCode.GDBuho1Objects2= [];
gdjs.FinCode.GDBuho1Objects3= [];
gdjs.FinCode.GDPuertaObjects1= [];
gdjs.FinCode.GDPuertaObjects2= [];
gdjs.FinCode.GDPuertaObjects3= [];
gdjs.FinCode.GDwinObjects1= [];
gdjs.FinCode.GDwinObjects2= [];
gdjs.FinCode.GDwinObjects3= [];
gdjs.FinCode.GDNewObject2Objects1= [];
gdjs.FinCode.GDNewObject2Objects2= [];
gdjs.FinCode.GDNewObject2Objects3= [];

gdjs.FinCode.conditionTrue_0 = {val:false};
gdjs.FinCode.condition0IsTrue_0 = {val:false};
gdjs.FinCode.condition1IsTrue_0 = {val:false};
gdjs.FinCode.condition2IsTrue_0 = {val:false};


gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.FinCode.GDCheckpointObjects1});gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDChicaObjects1Objects = Hashtable.newFrom({"Chica": gdjs.FinCode.GDChicaObjects1});gdjs.FinCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FinCode.GDChicaObjects1, gdjs.FinCode.GDChicaObjects2);


gdjs.FinCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinCode.GDChicaObjects2.length;i<l;++i) {
    if ( gdjs.FinCode.GDChicaObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.FinCode.condition0IsTrue_0.val = true;
        gdjs.FinCode.GDChicaObjects2[k] = gdjs.FinCode.GDChicaObjects2[i];
        ++k;
    }
}
gdjs.FinCode.GDChicaObjects2.length = k;}if (gdjs.FinCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinCode.GDChicaObjects2 */
{for(var i = 0, len = gdjs.FinCode.GDChicaObjects2.length ;i < len;++i) {
    gdjs.FinCode.GDChicaObjects2[i].setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.FinCode.GDChicaObjects1 */

gdjs.FinCode.condition0IsTrue_0.val = false;
gdjs.FinCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinCode.GDChicaObjects1.length;i<l;++i) {
    if ( !(gdjs.FinCode.GDChicaObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.FinCode.condition0IsTrue_0.val = true;
        gdjs.FinCode.GDChicaObjects1[k] = gdjs.FinCode.GDChicaObjects1[i];
        ++k;
    }
}
gdjs.FinCode.GDChicaObjects1.length = k;}if ( gdjs.FinCode.condition0IsTrue_0.val ) {
{
gdjs.FinCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "b"));
}}
if (gdjs.FinCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FinCode.GDChicaObjects1 */
{for(var i = 0, len = gdjs.FinCode.GDChicaObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDChicaObjects1[i].setAnimationName("Idle");
}
}}

}


};gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.FinCode.GDNewObject2Objects1});gdjs.FinCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinCode.GDChicaObjects1.length;i<l;++i) {
    if ( gdjs.FinCode.GDChicaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FinCode.condition0IsTrue_0.val = true;
        gdjs.FinCode.GDChicaObjects1[k] = gdjs.FinCode.GDChicaObjects1[i];
        ++k;
    }
}
gdjs.FinCode.GDChicaObjects1.length = k;}if (gdjs.FinCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinCode.GDChicaObjects1 */
{for(var i = 0, len = gdjs.FinCode.GDChicaObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDChicaObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.FinCode.GDCheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
{
gdjs.FinCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDCheckpointObjects1Objects, gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDChicaObjects1Objects, false, runtimeScene, false);
}if (gdjs.FinCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinCode.GDCheckpointObjects1 */
{for(var i = 0, len = gdjs.FinCode.GDCheckpointObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDCheckpointObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinCode.GDChicaObjects1.length;i<l;++i) {
    if ( gdjs.FinCode.GDChicaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.FinCode.condition0IsTrue_0.val = true;
        gdjs.FinCode.GDChicaObjects1[k] = gdjs.FinCode.GDChicaObjects1[i];
        ++k;
    }
}
gdjs.FinCode.GDChicaObjects1.length = k;}if (gdjs.FinCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.FinCode.condition0IsTrue_0.val = false;
{
gdjs.FinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.FinCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);
{for(var i = 0, len = gdjs.FinCode.GDChicaObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDChicaObjects1[i].flipX(false);
}
}}

}


{


gdjs.FinCode.condition0IsTrue_0.val = false;
{
gdjs.FinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.FinCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);
{for(var i = 0, len = gdjs.FinCode.GDChicaObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDChicaObjects1[i].flipX(true);
}
}}

}


{


gdjs.FinCode.condition0IsTrue_0.val = false;
{
gdjs.FinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.FinCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);
{for(var i = 0, len = gdjs.FinCode.GDChicaObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDChicaObjects1[i].setAnimationName("Attack");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.FinCode.GDChicaObjects1.length === 0 ) ? 0 :gdjs.FinCode.GDChicaObjects1[0].getPointX("")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chica"), gdjs.FinCode.GDChicaObjects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinCode.GDChicaObjects1.length;i<l;++i) {
    if ( gdjs.FinCode.GDChicaObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.FinCode.condition0IsTrue_0.val = true;
        gdjs.FinCode.GDChicaObjects1[k] = gdjs.FinCode.GDChicaObjects1[i];
        ++k;
    }
}
gdjs.FinCode.GDChicaObjects1.length = k;}if (gdjs.FinCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinCode.GDChicaObjects1 */
{for(var i = 0, len = gdjs.FinCode.GDChicaObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDChicaObjects1[i].setAnimationName("subir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.FinCode.GDNewObject2Objects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
gdjs.FinCode.condition1IsTrue_0.val = false;
{
gdjs.FinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.FinCode.condition0IsTrue_0.val ) {
{
gdjs.FinCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.FinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};

gdjs.FinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinCode.GDPiso32Objects1.length = 0;
gdjs.FinCode.GDPiso32Objects2.length = 0;
gdjs.FinCode.GDPiso32Objects3.length = 0;
gdjs.FinCode.GDPiso3Objects1.length = 0;
gdjs.FinCode.GDPiso3Objects2.length = 0;
gdjs.FinCode.GDPiso3Objects3.length = 0;
gdjs.FinCode.GDNewObject3Objects1.length = 0;
gdjs.FinCode.GDNewObject3Objects2.length = 0;
gdjs.FinCode.GDNewObject3Objects3.length = 0;
gdjs.FinCode.GDNewObjectObjects1.length = 0;
gdjs.FinCode.GDNewObjectObjects2.length = 0;
gdjs.FinCode.GDNewObjectObjects3.length = 0;
gdjs.FinCode.GDProtagonistaObjects1.length = 0;
gdjs.FinCode.GDProtagonistaObjects2.length = 0;
gdjs.FinCode.GDProtagonistaObjects3.length = 0;
gdjs.FinCode.GDBuhoObjects1.length = 0;
gdjs.FinCode.GDBuhoObjects2.length = 0;
gdjs.FinCode.GDBuhoObjects3.length = 0;
gdjs.FinCode.GDPicosObjects1.length = 0;
gdjs.FinCode.GDPicosObjects2.length = 0;
gdjs.FinCode.GDPicosObjects3.length = 0;
gdjs.FinCode.GDPuenteObjects1.length = 0;
gdjs.FinCode.GDPuenteObjects2.length = 0;
gdjs.FinCode.GDPuenteObjects3.length = 0;
gdjs.FinCode.GDChicaObjects1.length = 0;
gdjs.FinCode.GDChicaObjects2.length = 0;
gdjs.FinCode.GDChicaObjects3.length = 0;
gdjs.FinCode.GDEnemigo1Objects1.length = 0;
gdjs.FinCode.GDEnemigo1Objects2.length = 0;
gdjs.FinCode.GDEnemigo1Objects3.length = 0;
gdjs.FinCode.GDB1Objects1.length = 0;
gdjs.FinCode.GDB1Objects2.length = 0;
gdjs.FinCode.GDB1Objects3.length = 0;
gdjs.FinCode.GDBg2Objects1.length = 0;
gdjs.FinCode.GDBg2Objects2.length = 0;
gdjs.FinCode.GDBg2Objects3.length = 0;
gdjs.FinCode.GDBg3Objects1.length = 0;
gdjs.FinCode.GDBg3Objects2.length = 0;
gdjs.FinCode.GDBg3Objects3.length = 0;
gdjs.FinCode.GDBg4Objects1.length = 0;
gdjs.FinCode.GDBg4Objects2.length = 0;
gdjs.FinCode.GDBg4Objects3.length = 0;
gdjs.FinCode.GDBg5Objects1.length = 0;
gdjs.FinCode.GDBg5Objects2.length = 0;
gdjs.FinCode.GDBg5Objects3.length = 0;
gdjs.FinCode.GDBg7Objects1.length = 0;
gdjs.FinCode.GDBg7Objects2.length = 0;
gdjs.FinCode.GDBg7Objects3.length = 0;
gdjs.FinCode.GDBg8Objects1.length = 0;
gdjs.FinCode.GDBg8Objects2.length = 0;
gdjs.FinCode.GDBg8Objects3.length = 0;
gdjs.FinCode.GDCheckpointObjects1.length = 0;
gdjs.FinCode.GDCheckpointObjects2.length = 0;
gdjs.FinCode.GDCheckpointObjects3.length = 0;
gdjs.FinCode.GDBalaObjects1.length = 0;
gdjs.FinCode.GDBalaObjects2.length = 0;
gdjs.FinCode.GDBalaObjects3.length = 0;
gdjs.FinCode.GDEscaleraObjects1.length = 0;
gdjs.FinCode.GDEscaleraObjects2.length = 0;
gdjs.FinCode.GDEscaleraObjects3.length = 0;
gdjs.FinCode.GDBuho1Objects1.length = 0;
gdjs.FinCode.GDBuho1Objects2.length = 0;
gdjs.FinCode.GDBuho1Objects3.length = 0;
gdjs.FinCode.GDPuertaObjects1.length = 0;
gdjs.FinCode.GDPuertaObjects2.length = 0;
gdjs.FinCode.GDPuertaObjects3.length = 0;
gdjs.FinCode.GDwinObjects1.length = 0;
gdjs.FinCode.GDwinObjects2.length = 0;
gdjs.FinCode.GDwinObjects3.length = 0;
gdjs.FinCode.GDNewObject2Objects1.length = 0;
gdjs.FinCode.GDNewObject2Objects2.length = 0;
gdjs.FinCode.GDNewObject2Objects3.length = 0;

gdjs.FinCode.eventsList1(runtimeScene);
return;

}

gdjs['FinCode'] = gdjs.FinCode;
