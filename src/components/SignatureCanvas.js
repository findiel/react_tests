import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignatureCanvas from 'react-signature-canvas'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';
import DeleteIcon from '@material-ui/icons/Delete';
import HttpIcon from '@material-ui/icons/Http';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import useNotification from './useNotification';

const useStyles = makeStyles(theme => ({
    canvasBorder: {
        border: '3px #6aab8d dashed'
    },
    canvas: {
        width: 500, 
        height: 200,
        [theme.breakpoints.down('sm')]: {
            width: 360, 
            height: 200,
        }
    },
    result: {
        marginLeft: theme.spacing(3), 
    },
    truthy: {
        color: '#6aab8d', 
    },
    falsy: {
        color: 'red', 
    },
    tooltip: {
        color: 'grey',
    },
}));

const SignatureCanvasComponent = () => {
    const classes = useStyles();
    const canvas = React.createRef();
    const [readySignatureCanvas, setReadySignatureCanvas] = React.useState(false);
    const [canvasState, setCanvasState] = React.useState({
        isDawning: false,
        isEmpty: true,
    });
    const { enqueueSuccessNotification, enqueueErrorNotification } = useNotification();
    
    React.useEffect(() => {
        if (canvas && canvas.current) {
            console.log(canvas)
            setReadySignatureCanvas(canvas.current);
        }
    },[canvas, canvas.current]) 

    React.useEffect(() => {
        console.log(canvasState);
    },[canvasState]) 

    const handleBegin = React.useCallback(() => {
        setCanvasState({...canvasState, isDawning: true, isEmpty: false});
    },[canvasState])

    const handleEnd = React.useCallback(() => {
        setCanvasState({...canvasState, isDawning: false});
    },[canvasState])

    const handleIsEmpty = React.useCallback(() => {
        if(readySignatureCanvas) {
            const isEmpty = readySignatureCanvas.isEmpty();
            setCanvasState({...canvasState, isEmpty})
        }
    },[readySignatureCanvas])

    const handleClear = React.useCallback(() => {
        if(readySignatureCanvas) {
            readySignatureCanvas.clear();
            setCanvasState({ isDawning: false, isEmpty: true})
        }
    },[readySignatureCanvas])

    const handleToDataURL = React.useCallback(() => {
        if(readySignatureCanvas) {
            const trimmedCanvas = readySignatureCanvas.getTrimmedCanvas();
            const toDataURL = trimmedCanvas.toDataURL('image/png');
            setCanvasState({...canvasState, toDataURL})
            readySignatureCanvas.clear();
        }
    },[readySignatureCanvas])

    const handleCoppy = React.useCallback(() => {
        if(navigator.clipboard && canvasState.toDataURL) {
            return navigator.clipboard.writeText(canvasState.toDataURL)
                .then(() => enqueueSuccessNotification({message: 'Coppied to clipboard.'}))
                .catch(() => enqueueErrorNotification({message: "Smth gone wrong. Not coppied."}))
        }
    },[navigator, canvasState])

    const handleToData = React.useCallback(() => {
        if(readySignatureCanvas) {
            const toData = readySignatureCanvas.toData();
            setCanvasState({...canvasState, toData});
            enqueueSuccessNotification({message: 'Data has been saved.'})
            readySignatureCanvas.clear();
        }
    },[readySignatureCanvas, canvasState])

    const handleFromData = React.useCallback(() => {
        if(readySignatureCanvas) {
            readySignatureCanvas.fromData(canvasState.toData);
            setCanvasState({...canvasState, fromData: true})
            enqueueSuccessNotification({message: 'Data has been written from saved data.'})
        }
    },[readySignatureCanvas, canvasState])

    const handleFromDataURL = React.useCallback(() => {
        if(readySignatureCanvas) {
            readySignatureCanvas.fromDataURL(canvasState.toDataURL);
            setCanvasState({...canvasState, fromDataURL: true,})
            enqueueSuccessNotification({message: 'Data has been written from generated image.'})
        }
    },[readySignatureCanvas, canvasState])

    return  (
        <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
                <div className={classes.canvasBorder}>
                    <SignatureCanvas
                    ref={canvas} 
                    penColor='#000000'
                    canvasProps={{className: classes.canvas}} 
                    onBegin={handleBegin}
                    onEnd={handleEnd}
                    />
                </div>
            </Grid>
            <Grid item>
                <Typography variant="h6">Signature Canvas functions</Typography>
                <Grid container direction="column" spacing={0.5}>
                    <Grid item container alignItems="center">
                        <Typography variant="body1">is Drawning: </Typography>
                        <Typography 
                            variant="body1" 
                            className={clsx({
                                [classes.result]: true,
                                [classes.truthy]: canvasState && canvasState.isDawning,
                                [classes.falsy]: canvasState && !canvasState.isDawning
                            })}>
                                {canvasState && canvasState.isDawning ? 'true' : 'false'}
                        </Typography>
                    </Grid>
                    <Grid item container alignItems="center">
                        <IconButton onClick={handleIsEmpty}>
                            <DesktopAccessDisabledIcon color="primary"/>
                        </IconButton>
                        <Typography variant="body1">isEmpty()</Typography>
                        <Typography 
                            variant="body1" 
                            className={clsx({
                                [classes.result]: true,
                                [classes.truthy]: canvasState && canvasState.isEmpty,
                                [classes.falsy]: canvasState && !canvasState.isEmpty
                            })}>
                                {canvasState && canvasState.isEmpty ? 'true' : 'false'}
                        </Typography>
                    </Grid>
                    <Grid item container alignItems="center">
                        <IconButton onClick={handleClear}>
                            <DeleteIcon color="primary"/>
                        </IconButton>
                        <Typography variant="body1">clear() & clear canvas state</Typography>
                        <Typography 
                            variant="body1" 
                            className={clsx({
                                [classes.result]: true,
                                [classes.truthy]: canvasState && canvasState.isEmpty,
                                [classes.falsy]: canvasState && !canvasState.isEmpty
                            })}>
                                {canvasState && canvasState.isEmpty ? 'cleared' : 'dirty'}
                        </Typography>
                    </Grid>
                    <Grid item container alignItems="center">
                        <IconButton onClick={handleToDataURL}>
                            <HttpIcon color="primary"/>
                        </IconButton>
                        <Typography variant="body1">toDataURL()</Typography>
                    </Grid>
                    {canvasState.toDataURL && (
                        <Grid container alignItems="center">
                            <Grid item>
                                <Typography variant="body1" className={classes.truthy}>Image has been generated</Typography>
                            </Grid>
                            <Grid item>
                            <Button variant="contained" color="primary" onClick={handleCoppy}>Coppy to clipboard</Button>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">, then go to <a href="https://codebeautify.org/base64-to-image-converter" target="_blank" rel="noopener noreferrer">GENERATOR</a> and paste it.</Typography>
                            </Grid>
                        </Grid>
                    )}
                    <Grid item container alignItems="center">
                        <IconButton onClick={handleFromDataURL} disabled={!canvasState.toDataURL}>
                            <FileCopyIcon color={!canvasState.toDataURL ? 'initial' : 'primary'}/>
                        </IconButton>
                        <Typography variant="body1">fromDataURL()</Typography>
                        <Typography 
                            variant="body1" 
                            className={clsx({
                                [classes.result]: true,
                                [classes.truthy]: canvasState && canvasState.fromDataURL,
                                [classes.tooltip]: canvasState && !canvasState.toDataURL,
                            })}>
                                {canvasState && canvasState.fromDataURL ? 'Data has been written from generated base64 image' : canvasState && canvasState.toDataURL ? '' : 'Generate image at first'}
                        </Typography>
                    </Grid>
                    <Grid item container alignItems="center">
                        <IconButton onClick={handleToData}>
                            <SaveIcon color="primary"/>
                        </IconButton>
                        <Typography variant="body1">toData()</Typography>
                        <Typography 
                            variant="body1" 
                            className={clsx({
                                [classes.result]: true,
                                [classes.truthy]: canvasState && canvasState.toData,
                            })}>
                                {canvasState && canvasState.toData && 'Data saved'}
                        </Typography>
                    </Grid>
                    <Grid item container alignItems="center">
                        <IconButton onClick={handleFromData} disabled={!canvasState.toData}>
                            <CreateIcon color={!canvasState.toData ? 'initial' : 'primary'}/>
                        </IconButton>
                        <Typography variant="body1">fromData()</Typography>
                        <Typography 
                            variant="body1" 
                            className={clsx({
                                [classes.result]: true,
                                [classes.truthy]: canvasState && canvasState.fromData,
                                [classes.tooltip]: canvasState && !canvasState.toData,
                            })}>
                                {canvasState && canvasState.fromData ? 'Data has been written from saved data.' : canvasState && canvasState.toData ? '' : 'Save data at first'}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
};

SignatureCanvasComponent.propTypes = {
};

SignatureCanvasComponent.defaultProps = {
};

export default SignatureCanvasComponent;