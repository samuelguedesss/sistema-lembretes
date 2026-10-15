export function erroHandler(err, req, res, next) {
    const status = err.status  || 500;

    if(status === 500) {
        console.error('[500]', err);
    }

    return res.status(status).json({err: err.message});
}