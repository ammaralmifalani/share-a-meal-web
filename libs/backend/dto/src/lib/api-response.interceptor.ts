import { ApiResponse } from '@avans-nx-workshop/shared/api';

import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
    
    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<ApiResponse<unknown>> {
        return next.handle().pipe(
            map((result) => {
                if (result) {
                    return {
                        result,
                        Info: {
                            version: '1.0',
                            type: result instanceof Array ? 'list' : 'object',
                            count:
                                result instanceof Array ? result.length : 1,
                        },
                    };
                } else {
                    return {
                        result: undefined,
                        Info: {
                            version: '1.0',
                            type: 'none',
                            count: 0,
                        },
                    };
                }
            })
        );
    }
}
